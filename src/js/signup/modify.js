import '../../css/index.css';
import { $ } from '../utils/dom';
import { validPassword } from './validPassword';

const { user } = JSON.parse(localStorage.getItem('user'));

const signUpForm = $('#sign-up-info-form');
const emailInput = $('#email-input');
const nameInput = $('#name-input');
const passwordInput = $('#password-input');
const passwordCheckInput = $('#password-check');

emailInput.value = user.email;

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const passwordValue = passwordInput.value;
  const passwordCheckValue = passwordCheckInput.value;

  try {
    validPassword(passwordValue, passwordCheckValue);
    const response = await fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: nameValue,
        email: user.email,
        password: passwordValue,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    location.href = 'http://localhost:9000/login.html';
  } catch (error) {
    alert(error.message);
  }
});

import { SECTION_CONTAINER, CONFIRM_DELETE_MESSAGE } from '../constants/constants.js';
import { $, replaceElement } from '../utils/dom.js';
import { on, emit } from '../utils/event.js';
import { tableTemplate, tableInputTemplate } from '../templates/templates.js';

export default class ProductManageView {
  constructor() {
    on(SECTION_CONTAINER, [['submit', this.#onSubmitProductInfo]]);
  }

  #bindMangeEvent() {
    this.$productTbody.addEventListener('click', (e) => {
      const { target } = e;

      if (target.classList.contains('modify-button')) {
        this.#modifyProductInfo(target.closest('tr'));
        return;
      }
      if (target.classList.contains('confirm-button')) {
        this.#confirmProductInfo(target.closest('tr'));
        return;
      }
      if (target.classList.contains('delete-button')) {
        if (window.confirm(CONFIRM_DELETE_MESSAGE)) {
          this.#deleteProductInfo(target.closest('tr'));
        }
      }
    });
  }

  #onSubmitProductInfo = (e) => {
    e.preventDefault();
    if (e.target.id !== 'product-add-form') return;

    const product = {
      name: this.$productNameInput.value.trim(),
      price: this.$productPriceInput.valueAsNumber,
      quantity: this.$productQuantityInput.valueAsNumber,
    };
    emit(SECTION_CONTAINER, '@manage', { product });
  };

  #modifyProductInfo(selectedProduct) {
    const product = {
      name: selectedProduct.children[0].textContent,
      price: selectedProduct.children[1].textContent,
      quantity: selectedProduct.children[2].textContent,
    };
    replaceElement(selectedProduct, tableInputTemplate(product));
  }

  #confirmProductInfo(selectedProduct) {
    const index = selectedProduct.rowIndex - 1;
    const product = {
      name: selectedProduct.children[0].firstChild.value.trim(),
      price: selectedProduct.children[1].firstChild.valueAsNumber,
      quantity: selectedProduct.children[2].firstChild.valueAsNumber,
    };
    emit(SECTION_CONTAINER, '@modify', { index, product });
  }

  #deleteProductInfo(selectedProduct) {
    const index = selectedProduct.rowIndex - 1;
    this.$productTbody.removeChild(selectedProduct);
    emit(SECTION_CONTAINER, '@delete', { index });
  }

  renderModifiedProduct(index, product) {
    replaceElement(this.$productTbody.children[index], tableTemplate(product));
  }

  initManageDOM() {
    this.$productNameInput = $('#product-name-input');
    this.$productPriceInput = $('#product-price-input');
    this.$productQuantityInput = $('#product-quantity-input');
    this.$productTbody = $('#product-tbody');

    this.#bindMangeEvent();
  }

  render(productList) {
    if (Array.isArray(productList)) {
      productList.forEach((product) => {
        this.$productTbody.insertAdjacentHTML('beforeend', tableTemplate(product));
      });
      return;
    }
    this.$productTbody.insertAdjacentHTML('beforeend', tableTemplate(productList));
  }

  resetProductInput() {
    this.$productNameInput.value = '';
    this.$productPriceInput.value = '';
    this.$productQuantityInput.value = '';
  }
}

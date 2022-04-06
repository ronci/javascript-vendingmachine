import { SECTION_CONTAINER } from '../constants/constants.js';
import { $, replaceElement } from '../utils/dom.js';
import { CATEGORY_TEMPLATE } from '../templates/templates.js';
import { getSessionStorage } from '../utils/sessionStorage.js';

const routes = {
  '#!manage': CATEGORY_TEMPLATE.MANAGE,
  '#!charge': CATEGORY_TEMPLATE.CHARGE,
  '#!purchase': CATEGORY_TEMPLATE.PURCHASE,
};

const menu = {
  manage: $('#manage-menu'),
  charge: $('#charge-menu'),
  purchase: $('#purchase-menu'),
};

const selectTab = (hash) => {
  menu.manage.classList.toggle('select', hash === '#!manage');
  menu.charge.classList.toggle('select', hash === '#!charge');
  menu.purchase.classList.toggle('select', hash === '#!purchase');
};

export const initHashContents = (hash) => {
  const manager = getSessionStorage('user');
  const content = routes[hash] ?? '';
  if (manager) {
    selectTab(hash);
  }
  replaceElement(SECTION_CONTAINER, content);
};

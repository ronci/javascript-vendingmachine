/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SECTION_CONTAINER": () => (/* binding */ SECTION_CONTAINER),
/* harmony export */   "PRODUCT": () => (/* binding */ PRODUCT),
/* harmony export */   "COIN": () => (/* binding */ COIN),
/* harmony export */   "CONFIRM_DELETE_MESSAGE": () => (/* binding */ CONFIRM_DELETE_MESSAGE),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "SNACKBAR_MESSAGE": () => (/* binding */ SNACKBAR_MESSAGE)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");

var SECTION_CONTAINER = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#section-container');
var PRODUCT = {
  MAX_LENGTH: 10,
  PRICE_UNIT: 10,
  PRICE_RANGE: {
    MIN: 100,
    MAX: 10000
  },
  QUANTITY_RANGE: {
    MIN: 1,
    MAX: 20
  }
};
var COIN = {
  UNIT_LIST: [500, 100, 50, 10],
  MIN_UNIT: 10,
  MAX_AMOUNT: 100000
};
var CONFIRM_DELETE_MESSAGE = '상품을 삭제하시겠습니까?';
var ERROR_MESSAGE = {
  EMPTY_NAME: '상품명을 입력해 주세요.',
  EMPTY_PRICE: '상품가격을 입력해 주세요.',
  EMPTY_QUANTITY: '상품수량을 입력해 주세요.',
  OVER_MAX_LENGTH: "\uC0C1\uD488\uBA85\uC740 ".concat(PRODUCT.MAX_LENGTH, "\uAE00\uC790 \uC774\uD558\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694."),
  NOT_DIVIDE_NUMBER: "".concat(COIN.MIN_UNIT, "\uC6D0 \uB2E8\uC704\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694."),
  OUT_OF_PRICE_RANGE: "\uC0C1\uD488 \uAC00\uACA9\uC740 ".concat(PRODUCT.PRICE_RANGE.MIN, "\uC6D0 \uC774\uC0C1 ").concat(PRODUCT.PRICE_RANGE.MAX, "\uC6D0 \uC774\uD558\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694."),
  OUT_OF_QUANTITY_RANGE: "\uC0C1\uD488 \uC218\uB7C9\uC740 ".concat(PRODUCT.QUANTITY_RANGE.MIN, "\uAC1C \uC774\uC0C1 ").concat(PRODUCT.QUANTITY_RANGE.MAX, "\uAC1C \uC774\uD558\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694."),
  DUPLICATE_PRODUCT: '중복된 상품 입니다. 다른 상품을 입력해 주세요.',
  OVER_MAX_AMOUNT: "\uCD5C\uB300 \uBCF4\uC720 \uAE08\uC561\uC740 ".concat(COIN.MAX_AMOUNT, "\uC6D0 \uC744 \uB118\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),
  OVER_USER_AMOUNT: "\uD22C\uC785 \uAE08\uC561\uC774 \uBD80\uC871\uD558\uC5EC \uC120\uD0DD\uD55C \uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",
  NOT_MATCH_PASSWORD: '비밀번호와 비밀번호 확인이 일치하지않습니다.'
};
var SNACKBAR_MESSAGE = {
  ADD_PRODUCT: '상품을 추가했습니다.',
  MODIFY_PRODUCT: '상품 정보를 수정했습니다.',
  DELETE_PRODUCT: '상품을 삭제했습니다.',
  CHARGE_AMOUNT: "\uC794\uB3C8\uC744 \uCDA9\uC804\uD588\uC2B5\uB2C8\uB2E4.",
  CHARGE_USER_AMOUNT: '금액을 투입했습니다.',
  PURCHASE_PRODUCT: '상품을 구매했습니다.',
  RETURN_AMOUNT: '남은 금액을 반환했습니다.',
  NOT_USER: '존재하지 않는 회원입니다.'
};

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/event */ "./src/js/utils/event.js");
/* harmony import */ var _utils_snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/snackbar */ "./src/js/utils/snackbar.js");
/* harmony import */ var _models_Coin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/Coin */ "./src/js/models/Coin.ts");
/* harmony import */ var _models_ProductManger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/ProductManger */ "./src/js/models/ProductManger.ts");
/* harmony import */ var _models_ProductPurchase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/ProductPurchase */ "./src/js/models/ProductPurchase.ts");
/* harmony import */ var _views_menuCategoryView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/menuCategoryView */ "./src/js/views/menuCategoryView.js");
/* harmony import */ var _views_ChargeView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/ChargeView */ "./src/js/views/ChargeView.js");
/* harmony import */ var _views_ProductManageView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/ProductManageView */ "./src/js/views/ProductManageView.js");
/* harmony import */ var _views_ProductPurchaseView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/ProductPurchaseView */ "./src/js/views/ProductPurchaseView.js");




function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }












var _renderSavedData = /*#__PURE__*/new WeakMap();

var _handleProductInfo = /*#__PURE__*/new WeakMap();

var _modifySavedData = /*#__PURE__*/new WeakMap();

var _deleteSavedData = /*#__PURE__*/new WeakMap();

var _handleChargeCoin = /*#__PURE__*/new WeakMap();

var _handleAmount = /*#__PURE__*/new WeakMap();

var _purchaseSelectedProduct = /*#__PURE__*/new WeakMap();

var _handleReturnCoin = /*#__PURE__*/new WeakMap();

var Controller = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function Controller() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Controller);

  _classPrivateFieldInitSpec(this, _renderSavedData, {
    writable: true,
    value: function value(e) {
      var hash = e.detail.hash;
      (0,_views_menuCategoryView__WEBPACK_IMPORTED_MODULE_9__.initHashContents)(hash);

      switch (hash) {
        case '#!manage':
          _this.productManageView.initManageDOM();

          _this.productManageView.render(_this.productManager.getProducts());

          break;

        case '#!charge':
          _this.chargeView.initChargeDOM();

          _this.chargeView.renderCurrentAmount(_this.coin.getAmount());

          _this.chargeView.renderHaveCoins(_this.coin.getCoins());

          break;

        case '#!purchase':
          _this.productPurchaseView.initPurchaseDOM();

          _this.productPurchaseView.renderAmount(_this.productPurchase.getUserAmount());

          _this.productPurchaseView.render(_this.productManager.getProducts());

      }
    }
  });

  _classPrivateFieldInitSpec(this, _handleProductInfo, {
    writable: true,
    value: function value(e) {
      var product = e.detail.product;

      _this.productManager.addProduct(product);

      _this.productManageView.render(product);

      _this.productManageView.resetProductInput();

      (0,_utils_snackbar__WEBPACK_IMPORTED_MODULE_5__.handleSnackbarMessage)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SNACKBAR_MESSAGE.ADD_PRODUCT);
    }
  });

  _classPrivateFieldInitSpec(this, _modifySavedData, {
    writable: true,
    value: function value(e) {
      var _e$detail = e.detail,
          index = _e$detail.index,
          product = _e$detail.product;

      _this.productManager.modifyProduct(index, product);

      _this.productManageView.renderModifiedProduct(index, product);

      (0,_utils_snackbar__WEBPACK_IMPORTED_MODULE_5__.handleSnackbarMessage)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SNACKBAR_MESSAGE.MODIFY_PRODUCT);
    }
  });

  _classPrivateFieldInitSpec(this, _deleteSavedData, {
    writable: true,
    value: function value(e) {
      var index = e.detail.index;

      _this.productManager.deleteProduct(index);

      (0,_utils_snackbar__WEBPACK_IMPORTED_MODULE_5__.handleSnackbarMessage)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SNACKBAR_MESSAGE.DELETE_PRODUCT);
    }
  });

  _classPrivateFieldInitSpec(this, _handleChargeCoin, {
    writable: true,
    value: function value(e) {
      var amount = e.detail.amount;

      _this.coin.addAmount(amount);

      _this.chargeView.renderCurrentAmount(_this.coin.getAmount());

      _this.chargeView.resetChargeInput();

      _this.chargeView.renderHaveCoins(_this.coin.getCoins());

      (0,_utils_snackbar__WEBPACK_IMPORTED_MODULE_5__.handleSnackbarMessage)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SNACKBAR_MESSAGE.CHARGE_AMOUNT);
    }
  });

  _classPrivateFieldInitSpec(this, _handleAmount, {
    writable: true,
    value: function value(e) {
      var userAmount = e.detail.userAmount;

      _this.productPurchase.addUserAmount(userAmount);

      _this.productPurchaseView.renderAmount(_this.productPurchase.getUserAmount());

      _this.productPurchaseView.resetAmountInput();

      (0,_utils_snackbar__WEBPACK_IMPORTED_MODULE_5__.handleSnackbarMessage)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SNACKBAR_MESSAGE.CHARGE_USER_AMOUNT);
    }
  });

  _classPrivateFieldInitSpec(this, _purchaseSelectedProduct, {
    writable: true,
    value: function value(e) {
      var index = e.detail.index;

      var price = _this.productManager.purchaseProduct(index, _this.productPurchase.getUserAmount());

      var userAmount = _this.productPurchase.spendAmount(price);

      _this.productPurchaseView.renderAmount(userAmount);

      _this.productPurchaseView.renderModifiedProductInfo(index);

      (0,_utils_snackbar__WEBPACK_IMPORTED_MODULE_5__.handleSnackbarMessage)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SNACKBAR_MESSAGE.PURCHASE_PRODUCT);
    }
  });

  _classPrivateFieldInitSpec(this, _handleReturnCoin, {
    writable: true,
    value: function value(e) {
      var result = _this.coin.returnCoin(_this.productPurchase.getUserAmount());

      var remainCoins = result[0];
      var currentAmount = result[1];

      _this.productPurchase.setUserAmount(currentAmount);

      _this.productPurchaseView.renderAmount(currentAmount);

      _this.productPurchaseView.renderHaveCoins(remainCoins);

      (0,_utils_snackbar__WEBPACK_IMPORTED_MODULE_5__.handleSnackbarMessage)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SNACKBAR_MESSAGE.RETURN_AMOUNT);
    }
  });

  this.coin = new _models_Coin__WEBPACK_IMPORTED_MODULE_6__["default"]();
  this.productManager = new _models_ProductManger__WEBPACK_IMPORTED_MODULE_7__["default"]();
  this.productPurchase = new _models_ProductPurchase__WEBPACK_IMPORTED_MODULE_8__["default"]();
  this.chargeView = new _views_ChargeView__WEBPACK_IMPORTED_MODULE_10__["default"]();
  this.productManageView = new _views_ProductManageView__WEBPACK_IMPORTED_MODULE_11__["default"]();
  this.productPurchaseView = new _views_ProductPurchaseView__WEBPACK_IMPORTED_MODULE_12__["default"]();
  (0,_utils_event__WEBPACK_IMPORTED_MODULE_4__.on)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, [['@render', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _renderSavedData)], ['@manage', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleProductInfo)], ['@modify', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _modifySavedData)], ['@delete', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _deleteSavedData)], ['@charge', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleChargeCoin)], ['@amount', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleAmount)], ['@purchase', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _purchaseSelectedProduct)], ['@return', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleReturnCoin)]]);
});

var controller = new Controller();

/***/ }),

/***/ "./src/js/route/route.js":
/*!*******************************!*\
  !*** ./src/js/route/route.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/event */ "./src/js/utils/event.js");



var render = function render() {
  var hash = window.location.hash;
  (0,_utils_event__WEBPACK_IMPORTED_MODULE_1__.emit)(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SECTION_CONTAINER, '@render', {
    hash: hash
  });
};

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

/***/ }),

/***/ "./src/js/templates/templates.js":
/*!***************************************!*\
  !*** ./src/js/templates/templates.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY_TEMPLATE": () => (/* binding */ CATEGORY_TEMPLATE),
/* harmony export */   "tableTemplate": () => (/* binding */ tableTemplate),
/* harmony export */   "tableInputTemplate": () => (/* binding */ tableInputTemplate),
/* harmony export */   "purchaseTableTemplate": () => (/* binding */ purchaseTableTemplate)
/* harmony export */ });
var CATEGORY_TEMPLATE = {
  MANAGE: "\n    <h2 hidden>\uC0C1\uD488 \uAD00\uB9AC</h2>\n    <form id=\"product-add-form\">\n      <label>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n      <div class=\"form-input product-manage-input-width\">\n        <input\n          id=\"product-name-input\"\n          type=\"text\"\n          placeholder=\"\uC0C1\uD488\uBA85\"\n          maxlength=\"10\"\n          required\n          aria-labelledby=\"product-information\"\n        />\n        <input\n          id=\"product-price-input\"\n          type=\"number\"\n          placeholder=\"\uAC00\uACA9\"\n          min=\"100\"\n          max=\"10000\"\n          required\n          aria-labelledby=\"product-information\"\n        />\n        <input\n          id=\"product-quantity-input\"\n          type=\"number\"\n          placeholder=\"\uC218\uB7C9\"\n          min=\"1\"\n          max=\"20\"\n          required\n          aria-labelledby=\"product-information\"\n        />\n        <button class=\"hover-button\">\uCD94\uAC00</button>\n      </div>\n    </form>\n    <table class=\"table\">\n      <caption class=\"caption\">\n        \uC0C1\uD488 \uD604\uD669\n      </caption>\n      <colgroup>\n        <col>\n        <col width=\"24%\">\n        <col width=\"24%\">\n        <col width=\"24%\">\n      </colgroup>\n      <thead>\n        <tr>\n          <th>\uC0C1\uD488\uBA85</th>\n          <th>\uAC00\uACA9</th>\n          <th>\uC218\uB7C9</th>\n        </tr>\n      </thead>\n      <tbody id=\"product-tbody\"></tbody>\n    </table>\n  ",
  CHARGE: "\n    <h2 hidden>\uC794\uB3C8 \uCDA9\uC804</h2>\n    <form id=\"charge-form\" class=\"form\">\n      <label for=\"charge-amount-input\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n      <div class=\"form-input\">\n        <input\n          id=\"charge-amount-input\"\n          class=\"input-width\"\n          type=\"number\"\n          placeholder=\"\uAE08\uC561\"\n          min=\"10\"\n          max=\"100000\"\n          required\n        />\n        <button class=\"hover-button\">\uAD6C\uC785</button>\n      </div>\n      <p class=\"current-amount mt-20px\"></p>\n    </form>\n    <table class=\"table\">\n      <caption class=\"caption\">\n        \uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804\n      </caption>\n      <thead>\n        <tr>\n          <th>\uB3D9\uC804</th>\n          <th>\uAC1C\uC218</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>500\uC6D0</td>\n          <td id=\"five-hundred-coin\"></td>\n        </tr>\n        <tr>\n          <td>100\uC6D0</td>\n          <td id=\"one-hundred-coin\"></td>\n        </tr>\n        <tr>\n          <td>50\uC6D0</td>\n          <td id=\"fifty-coin\"></td>\n        </tr>\n        <tr>\n          <td>10\uC6D0</td>\n          <td id=\"ten-coin\"></td>\n        </tr>\n      </tbody>\n    </table>\n  ",
  PURCHASE: "\n    <h2 hidden>\uC0C1\uD488 \uAD6C\uB9E4</h2>\n    <form id=\"purchase-form\" class=\"purchase-form-width form\">\n      <label for=\"amount-input\">\uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uAE08\uC561\uC744 \uD22C\uC785\uD574\uC8FC\uC138\uC694.</label>\n      <div class=\"form-input\">\n        <input id=\"amount-input\" type=\"number\" max=\"10000\" class=\"input-width\" placeholder=\"\uAE08\uC561\" />\n        <button class=\"hover-button\">\uD22C\uC785</button>\n      </div>\n      <p id=\"current-amount\" class=\"mt-20px\">\uD22C\uC785\uD55C \uAE08\uC561: 0\uC6D0</p>\n    </form>\n    <table class=\"table\">\n      <caption class=\"caption\">\n        \uAD6C\uB9E4 \uAC00\uB2A5 \uC0C1\uD488 \uD604\uD669\n      </caption>\n      <thead>\n        <tr>\n          <th>\uC0C1\uD488\uBA85</th>\n          <th>\uAC00\uACA9</th>\n          <th>\uC218\uB7C9</th>\n          <th>\uAD6C\uB9E4</th>\n        </tr>\n      </thead>\n      <tbody id=\"purchase-tbody\" />\n    </table>\n    <table class=\"table\">\n      <caption class=\"caption\">\n        \uC794\uB3C8 \uBC18\uD658\n      </caption>\n      <thead>\n        <tr>\n          <th>\uB3D9\uC804</th>\n          <th>\uAC1C\uC218</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>500\uC6D0</td>\n          <td id=\"five-hundred-coin-remain\">0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>100\uC6D0</td>\n          <td id=\"one-hundred-coin-remain\">0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>50\uC6D0</td>\n          <td id=\"fifty-coin-remain\">0\uAC1C</td>\n        </tr>\n        <tr>\n          <td>10\uC6D0</td>\n          <td id=\"ten-coin-remain\">0\uAC1C</td>\n        </tr>\n      </tbody>\n    </table>\n    <button id=\"return-button\" type=\"button\" class=\"button change-button\">\uBC18\uD658\uD558\uAE30</button>\n  "
};
var tableTemplate = function tableTemplate(product) {
  return "\n    <tr>\n      <td>".concat(product.name, "</td>\n      <td>").concat(product.price, "</td>\n      <td>").concat(product.quantity, "</td>\n      <td><button class=\"modify-button\" type=\"button\">\uC218\uC815</button> <button class=\"delete-button\" type=\"button\">\uC0AD\uC81C</button></td>\n    </tr>\n  ");
};
var tableInputTemplate = function tableInputTemplate(product) {
  return "\n    <td><input type=\"text\" class=\"modify-input\" placeholder=\"\uC0C1\uD488\uBA85\" value=".concat(product.name, " /></td>\n    <td><input type=\"number\" class=\"modify-input\" placeholder=\"\uAC00\uACA9\" value=").concat(product.price, " /></td>\n    <td><input type=\"number\" class=\"modify-input\" placeholder=\"\uC218\uB7C9\" value=").concat(product.quantity, " /></td>\n    <td><button class=\"confirm-button\" type=\"button\">\uD655\uC778</button></td>\n  ");
};
var purchaseTableTemplate = function purchaseTableTemplate(product) {
  return "\n    <tr>\n      <td>".concat(product.name, "</td>\n      <td>").concat(product.price, "</td>\n      <td>").concat(product.quantity, "</td>\n      <td><button type=\"button\" class=\"purchase-button\">\uAD6C\uB9E4</button></td>\n    </tr>");
};

/***/ }),

/***/ "./src/js/utils/common.js":
/*!********************************!*\
  !*** ./src/js/utils/common.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isMaximumLength": () => (/* binding */ isMaximumLength),
/* harmony export */   "isDivideUnit": () => (/* binding */ isDivideUnit),
/* harmony export */   "isRangeNumber": () => (/* binding */ isRangeNumber),
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber),
/* harmony export */   "isOverMaxNumber": () => (/* binding */ isOverMaxNumber),
/* harmony export */   "isSame": () => (/* binding */ isSame)
/* harmony export */ });
var isEmpty = function isEmpty(name) {
  return !name;
};
var isMaximumLength = function isMaximumLength(value, max) {
  return value.length > max;
};
var isDivideUnit = function isDivideUnit(number, unit) {
  return number % unit !== 0;
};
var isRangeNumber = function isRangeNumber(number, min, max) {
  return number < min || number > max;
};
var getRandomNumber = function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
};
var isOverMaxNumber = function isOverMaxNumber(number, max) {
  return number > max;
};
var isSame = function isSame(valueA, valueB) {
  return valueA === valueB;
};

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "replaceElement": () => (/* binding */ replaceElement)
/* harmony export */ });
var $ = function $(select) {
  return document.querySelector(select);
};
var replaceElement = function replaceElement(element, content) {
  element.replaceChildren();
  element.insertAdjacentHTML('beforeend', content);
};

/***/ }),

/***/ "./src/js/utils/event.js":
/*!*******************************!*\
  !*** ./src/js/utils/event.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emit": () => (/* binding */ emit),
/* harmony export */   "on": () => (/* binding */ on)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snackbar */ "./src/js/utils/snackbar.js");


var emit = function emit(target, eventName, detail) {
  var event = new CustomEvent(eventName, {
    detail: detail
  });
  target.dispatchEvent(event);
};
var on = function on(target, events) {
  events.forEach(function (_ref) {
    var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        eventName = _ref2[0],
        handler = _ref2[1];

    target.addEventListener(eventName, function (e) {
      try {
        handler(e);
      } catch (error) {
        (0,_snackbar__WEBPACK_IMPORTED_MODULE_1__.handleSnackbarMessage)(error.message);
      }
    });
  });
};

/***/ }),

/***/ "./src/js/utils/localStorage.js":
/*!**************************************!*\
  !*** ./src/js/utils/localStorage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage),
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage)
/* harmony export */ });
var getLocalStorage = function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
};
var setLocalStorage = function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

/***/ }),

/***/ "./src/js/utils/sessionStorage.js":
/*!****************************************!*\
  !*** ./src/js/utils/sessionStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSessionStorage": () => (/* binding */ getSessionStorage),
/* harmony export */   "setSessionStorage": () => (/* binding */ setSessionStorage),
/* harmony export */   "removeSessionStorage": () => (/* binding */ removeSessionStorage)
/* harmony export */ });
var getSessionStorage = function getSessionStorage(key) {
  return JSON.parse(sessionStorage.getItem(key));
};
var setSessionStorage = function setSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
};
var removeSessionStorage = function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
};

/***/ }),

/***/ "./src/js/utils/snackbar.js":
/*!**********************************!*\
  !*** ./src/js/utils/snackbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSnackbarMessage": () => (/* binding */ handleSnackbarMessage)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/js/utils/dom.js");

var $snackbar = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.$)('#snackbar');
var handleSnackbarMessage = function handleSnackbarMessage(message) {
  $snackbar.classList.toggle('show');
  $snackbar.textContent = message;
  setTimeout(function () {
    $snackbar.classList.toggle('show');
  }, 1800);
};

/***/ }),

/***/ "./src/js/views/ChargeView.js":
/*!************************************!*\
  !*** ./src/js/views/ChargeView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChargeView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/event */ "./src/js/utils/event.js");




function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }





var _onSubmitChargeAmount = /*#__PURE__*/new WeakMap();

var ChargeView = /*#__PURE__*/function () {
  function ChargeView() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChargeView);

    _classPrivateFieldInitSpec(this, _onSubmitChargeAmount, {
      writable: true,
      value: function value(e) {
        e.preventDefault();
        if (e.target.id !== 'charge-form') return;
        var amount = _this.$chargeAmountInput.valueAsNumber;
        (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emit)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, '@charge', {
          amount: amount
        });
      }
    });

    (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.on)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, [['submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _onSubmitChargeAmount)]]);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChargeView, [{
    key: "initChargeDOM",
    value: function initChargeDOM() {
      this.$chargeAmountInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#charge-amount-input');
      this.$currentAmount = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('.current-amount');
      this.$fiveHundredCoin = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#five-hundred-coin');
      this.$oneHundredCoin = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#one-hundred-coin');
      this.$fiftyCoin = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#fifty-coin');
      this.$tenCoin = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#ten-coin');
    }
  }, {
    key: "renderHaveCoins",
    value: function renderHaveCoins(coins) {
      this.$fiveHundredCoin.textContent = "".concat(coins[500], "\uAC1C");
      this.$oneHundredCoin.textContent = "".concat(coins[100], "\uAC1C");
      this.$fiftyCoin.textContent = "".concat(coins[50], "\uAC1C");
      this.$tenCoin.textContent = "".concat(coins[10], "\uAC1C");
    }
  }, {
    key: "renderCurrentAmount",
    value: function renderCurrentAmount(amount) {
      this.$currentAmount.textContent = "\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: ".concat(amount, "\uC6D0");
    }
  }, {
    key: "resetChargeInput",
    value: function resetChargeInput() {
      this.$chargeAmountInput.value = '';
    }
  }]);

  return ChargeView;
}();



/***/ }),

/***/ "./src/js/views/ProductManageView.js":
/*!*******************************************!*\
  !*** ./src/js/views/ProductManageView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductManageView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/event */ "./src/js/utils/event.js");
/* harmony import */ var _templates_templates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/templates */ "./src/js/templates/templates.js");




function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }






var _bindManageEvent = /*#__PURE__*/new WeakSet();

var _onSubmitProductInfo = /*#__PURE__*/new WeakMap();

var _modifyProductInfo = /*#__PURE__*/new WeakSet();

var _confirmProductInfo = /*#__PURE__*/new WeakSet();

var _deleteProductInfo = /*#__PURE__*/new WeakSet();

var ProductManageView = /*#__PURE__*/function () {
  function ProductManageView() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductManageView);

    _classPrivateMethodInitSpec(this, _deleteProductInfo);

    _classPrivateMethodInitSpec(this, _confirmProductInfo);

    _classPrivateMethodInitSpec(this, _modifyProductInfo);

    _classPrivateMethodInitSpec(this, _bindManageEvent);

    _classPrivateFieldInitSpec(this, _onSubmitProductInfo, {
      writable: true,
      value: function value(e) {
        e.preventDefault();
        if (e.target.id !== 'product-add-form') return;
        var product = {
          name: _this.$productNameInput.value.trim(),
          price: _this.$productPriceInput.valueAsNumber,
          quantity: _this.$productQuantityInput.valueAsNumber
        };
        (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emit)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, '@manage', {
          product: product
        });
      }
    });

    (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.on)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, [['submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _onSubmitProductInfo)]]);

    _classPrivateMethodGet(this, _bindManageEvent, _bindManageEvent2).call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductManageView, [{
    key: "renderModifiedProduct",
    value: function renderModifiedProduct(index, product) {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.replaceElement)(this.$productTbody.children[index], (0,_templates_templates__WEBPACK_IMPORTED_MODULE_6__.tableTemplate)(product));
    }
  }, {
    key: "initManageDOM",
    value: function initManageDOM() {
      this.$productNameInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#product-name-input');
      this.$productPriceInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#product-price-input');
      this.$productQuantityInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#product-quantity-input');
      this.$productTbody = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#product-tbody');
    }
  }, {
    key: "render",
    value: function render(productList) {
      var _this2 = this;

      if (Array.isArray(productList)) {
        productList.forEach(function (product) {
          _this2.$productTbody.insertAdjacentHTML('beforeend', (0,_templates_templates__WEBPACK_IMPORTED_MODULE_6__.tableTemplate)(product));
        });
        return;
      }

      this.$productTbody.insertAdjacentHTML('beforeend', (0,_templates_templates__WEBPACK_IMPORTED_MODULE_6__.tableTemplate)(productList));
    }
  }, {
    key: "resetProductInput",
    value: function resetProductInput() {
      this.$productNameInput.value = '';
      this.$productPriceInput.value = '';
      this.$productQuantityInput.value = '';
      this.$productNameInput.focus();
    }
  }]);

  return ProductManageView;
}();

function _bindManageEvent2() {
  var _this3 = this;

  _constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('modify-button')) {
      _classPrivateMethodGet(_this3, _modifyProductInfo, _modifyProductInfo2).call(_this3, target.closest('tr'));

      return;
    }

    if (target.classList.contains('confirm-button')) {
      _classPrivateMethodGet(_this3, _confirmProductInfo, _confirmProductInfo2).call(_this3, target.closest('tr'));

      return;
    }

    if (target.classList.contains('delete-button')) {
      if (window.confirm(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.CONFIRM_DELETE_MESSAGE)) {
        _classPrivateMethodGet(_this3, _deleteProductInfo, _deleteProductInfo2).call(_this3, target.closest('tr'));
      }
    }
  });
  _constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER.addEventListener('keyup', function (e) {
    var code = e.code,
        target = e.target;

    if (code === 'Enter' && target.classList.contains('modify-input')) {
      _classPrivateMethodGet(_this3, _confirmProductInfo, _confirmProductInfo2).call(_this3, target.closest('tr'));

      return;
    }
  });
}

function _modifyProductInfo2(selectedProduct) {
  var product = {
    name: selectedProduct.children[0].textContent,
    price: selectedProduct.children[1].textContent,
    quantity: selectedProduct.children[2].textContent
  };
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.replaceElement)(selectedProduct, (0,_templates_templates__WEBPACK_IMPORTED_MODULE_6__.tableInputTemplate)(product));
  selectedProduct.children[0].firstChild.focus();
}

function _confirmProductInfo2(selectedProduct) {
  var index = selectedProduct.rowIndex - 1;
  var product = {
    name: selectedProduct.children[0].firstChild.value.trim(),
    price: selectedProduct.children[1].firstChild.valueAsNumber,
    quantity: selectedProduct.children[2].firstChild.valueAsNumber
  };
  (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emit)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, '@modify', {
    index: index,
    product: product
  });
}

function _deleteProductInfo2(selectedProduct) {
  var index = selectedProduct.rowIndex - 1;
  this.$productTbody.removeChild(selectedProduct);
  (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emit)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, '@delete', {
    index: index
  });
}



/***/ }),

/***/ "./src/js/views/ProductPurchaseView.js":
/*!*********************************************!*\
  !*** ./src/js/views/ProductPurchaseView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductPurchaseView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/event */ "./src/js/utils/event.js");
/* harmony import */ var _templates_templates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/templates */ "./src/js/templates/templates.js");




function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }






var _bindPurchaseAndReturnEvent = /*#__PURE__*/new WeakSet();

var _onSubmitInputAmount = /*#__PURE__*/new WeakMap();

var _purchase = /*#__PURE__*/new WeakSet();

var ProductPurchaseView = /*#__PURE__*/function () {
  function ProductPurchaseView() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductPurchaseView);

    _classPrivateMethodInitSpec(this, _purchase);

    _classPrivateMethodInitSpec(this, _bindPurchaseAndReturnEvent);

    _classPrivateFieldInitSpec(this, _onSubmitInputAmount, {
      writable: true,
      value: function value(e) {
        e.preventDefault();
        if (e.target.id !== 'purchase-form') return;
        var userAmount = _this.$amountInput.valueAsNumber;
        (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emit)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, '@amount', {
          userAmount: userAmount
        });
      }
    });

    (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.on)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, [['submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _onSubmitInputAmount)]]);

    _classPrivateMethodGet(this, _bindPurchaseAndReturnEvent, _bindPurchaseAndReturnEvent2).call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductPurchaseView, [{
    key: "renderModifiedProductInfo",
    value: function renderModifiedProductInfo(index) {
      var selectedProduct = this.$purchaseTbody.children[index];
      var quantity = selectedProduct.children[2].textContent;
      selectedProduct.children[2].textContent = Number(quantity) - 1;
      if (quantity === '1') this.$purchaseTbody.removeChild(selectedProduct);
    }
  }, {
    key: "initPurchaseDOM",
    value: function initPurchaseDOM() {
      this.$amountInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#amount-input');
      this.$currentAmount = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#current-amount');
      this.$purchaseTbody = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#purchase-tbody');
      this.$fiveHundredCoinRemain = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#five-hundred-coin-remain');
      this.$oneHundredCoinRemain = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#one-hundred-coin-remain');
      this.$fiftyCoinRemain = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#fifty-coin-remain');
      this.$tenCoinRemain = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.$)('#ten-coin-remain');
    }
  }, {
    key: "renderAmount",
    value: function renderAmount(userAmount) {
      this.$currentAmount.textContent = "\uD22C\uC785\uD55C \uAE08\uC561: ".concat(userAmount, "\uC6D0");
    }
  }, {
    key: "render",
    value: function render(productList) {
      var _this2 = this;

      if (Array.isArray(productList)) {
        productList.forEach(function (product) {
          _this2.$purchaseTbody.insertAdjacentHTML('beforeend', (0,_templates_templates__WEBPACK_IMPORTED_MODULE_6__.purchaseTableTemplate)(product));
        });
        return;
      }

      this.$purchaseTbody.insertAdjacentHTML('beforeend', (0,_templates_templates__WEBPACK_IMPORTED_MODULE_6__.purchaseTableTemplate)(productList));
    }
  }, {
    key: "resetAmountInput",
    value: function resetAmountInput() {
      this.$amountInput.value = '';
    }
  }, {
    key: "renderHaveCoins",
    value: function renderHaveCoins(coins) {
      this.$fiveHundredCoinRemain.textContent = "".concat(coins[500], "\uAC1C");
      this.$oneHundredCoinRemain.textContent = "".concat(coins[100], "\uAC1C");
      this.$fiftyCoinRemain.textContent = "".concat(coins[50], "\uAC1C");
      this.$tenCoinRemain.textContent = "".concat(coins[10], "\uAC1C");
    }
  }]);

  return ProductPurchaseView;
}();

function _bindPurchaseAndReturnEvent2() {
  var _this3 = this;

  _constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('purchase-button')) {
      _classPrivateMethodGet(_this3, _purchase, _purchase2).call(_this3, target.closest('tr'));
    }

    if (target.id === 'return-button') {
      (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emit)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, '@return');
    }
  });
}

function _purchase2(selectedProduct) {
  var index = selectedProduct.rowIndex - 1;
  (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emit)(_constants_constants__WEBPACK_IMPORTED_MODULE_3__.SECTION_CONTAINER, '@purchase', {
    index: index
  });
}



/***/ }),

/***/ "./src/js/views/menuCategoryView.js":
/*!******************************************!*\
  !*** ./src/js/views/menuCategoryView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initHashContents": () => (/* binding */ initHashContents)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sessionStorage */ "./src/js/utils/sessionStorage.js");
/* harmony import */ var _templates_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/templates */ "./src/js/templates/templates.js");




var routes = {
  '#!manage': _templates_templates__WEBPACK_IMPORTED_MODULE_3__.CATEGORY_TEMPLATE.MANAGE,
  '#!charge': _templates_templates__WEBPACK_IMPORTED_MODULE_3__.CATEGORY_TEMPLATE.CHARGE,
  '#!purchase': _templates_templates__WEBPACK_IMPORTED_MODULE_3__.CATEGORY_TEMPLATE.PURCHASE
};
var menu = {
  manage: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#manage-menu'),
  charge: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#charge-menu'),
  purchase: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)('#purchase-menu')
};

var selectTab = function selectTab(hash) {
  menu.manage.classList.toggle('select', hash === '#!manage');
  menu.charge.classList.toggle('select', hash === '#!charge');
  menu.purchase.classList.toggle('select', hash === '#!purchase');
};

var initHashContents = function initHashContents(hash) {
  var _routes$hash;

  var manager = (0,_utils_sessionStorage__WEBPACK_IMPORTED_MODULE_2__.getSessionStorage)('user');
  var content = (_routes$hash = routes[hash]) !== null && _routes$hash !== void 0 ? _routes$hash : '';

  if (manager) {
    selectTab(hash);
  }

  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.replaceElement)(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SECTION_CONTAINER, content);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#app {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 600px;\n  padding: 44px 80px;\n  margin: 100px auto 100px;\n  border: 1px solid var(--color-dark-gray);\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.vending-machine-header {\n  margin-bottom: 32px;\n  line-height: 36px;\n  font-size: 34px;\n  font-weight: 600;\n}\n\n.menu-list {\n  display: flex;\n  margin-bottom: 52px;\n  gap: 4px;\n}\n\n.button {\n  text-align: center;\n  width: 117px;\n  height: 36px;\n  border: none;\n  border-radius: 4px;\n  line-height: 38px;\n  font-weight: 500;\n  font-size: 16px;\n  background-color: var(--color-light-white);\n}\n\n.section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button:hover,\n.modify-button:hover,\n.delete-button:hover,\n.confirm-button:hover,\n.purchase-button:hover {\n  background-color: var(--color-dark-white);\n}\n\n.a-none-deco {\n  display: block;\n  text-decoration-line: none;\n}\n\n.a-none-deco:link,\n.a-none-deco:visited,\n.a-none-deco:hover,\n.a-none-deco:active {\n  color: black;\n}\n\n.menu-list li .select {\n  background-color: var(--color-sky-blue);\n}\n\n.form-input {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin: 8px 0 0;\n  gap: 3px;\n}\n\n.product-manage-input-width input {\n  width: 120px;\n}\n\n.form-input input {\n  height: 36px;\n  padding-left: 8px;\n  font-size: 16px;\n  border-radius: 4px;\n  border: 1px solid var(--color-light-gray);\n}\n\n.form-input button {\n  width: 56px;\n  margin-left: 16px;\n  line-height: 16px;\n  font-size: 14px;\n  font-weight: 700;\n  border: none;\n  border-radius: 4px;\n  color: var(--color-white);\n  background-color: var(--color-light-blue);\n}\n\n.mt-20px {\n  margin-top: 20px;\n}\n\n.hover-button:hover {\n  background-color: var(--color-dark-blue);\n}\n\n/* table */\n.table {\n  margin: 48px auto 20px;\n  font-size: 16px;\n  line-height: 24px;\n  table-layout: fixed;\n  word-break: break-all;\n  border-collapse: collapse;\n}\n\n.caption {\n  margin-bottom: 16px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.table tr {\n  border: 1px solid var(--color-light-gray);\n  border-width: 1px 0;\n}\n\n.table th {\n  padding: 8px 36px;\n  font-weight: 600;\n}\n\n.table td {\n  text-align: center;\n  padding: 8px 0;\n  font-weight: 400;\n}\n\n.table button {\n  width: 50px;\n  height: 32px;\n  border: 0px;\n  border-radius: 4px;\n  background-color: var(--color-light-white);\n}\n\n.input-width {\n  width: 300px;\n}\n\n.change-button {\n  display: block;\n  margin: 0 auto;\n}\n\n.modify-input {\n  width: 60%;\n  padding: 5px 0;\n}\n\n.purchase-form-width {\n  width: 375px;\n  margin: 0 auto;\n}\n\n/* snackbar */\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 0;\n}\n\n.show {\n  visibility: visible !important; /* Show the snackbar */\n  -webkit-animation: fadein 0.3s, fadeout 0.3s 1.7s;\n  animation: fadein 0.3s, fadeout 0.3s 1.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,wBAAwB;EACxB,wCAAwC;EACxC,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;;;;EAKE,yCAAyC;AAC3C;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;;AAEA;;;;EAIE,YAAY;AACd;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,yCAAyC;AAC3C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA,UAAU;AACV;EACE,sBAAsB;EACtB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA,aAAa;AACb;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,SAAS;AACX;;AAEA;EACE,8BAA8B,EAAE,sBAAsB;EACtD,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,aAAa;IACb,UAAU;EACZ;AACF","sourcesContent":["#app {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 600px;\n  padding: 44px 80px;\n  margin: 100px auto 100px;\n  border: 1px solid var(--color-dark-gray);\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.vending-machine-header {\n  margin-bottom: 32px;\n  line-height: 36px;\n  font-size: 34px;\n  font-weight: 600;\n}\n\n.menu-list {\n  display: flex;\n  margin-bottom: 52px;\n  gap: 4px;\n}\n\n.button {\n  text-align: center;\n  width: 117px;\n  height: 36px;\n  border: none;\n  border-radius: 4px;\n  line-height: 38px;\n  font-weight: 500;\n  font-size: 16px;\n  background-color: var(--color-light-white);\n}\n\n.section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.button:hover,\n.modify-button:hover,\n.delete-button:hover,\n.confirm-button:hover,\n.purchase-button:hover {\n  background-color: var(--color-dark-white);\n}\n\n.a-none-deco {\n  display: block;\n  text-decoration-line: none;\n}\n\n.a-none-deco:link,\n.a-none-deco:visited,\n.a-none-deco:hover,\n.a-none-deco:active {\n  color: black;\n}\n\n.menu-list li .select {\n  background-color: var(--color-sky-blue);\n}\n\n.form-input {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin: 8px 0 0;\n  gap: 3px;\n}\n\n.product-manage-input-width input {\n  width: 120px;\n}\n\n.form-input input {\n  height: 36px;\n  padding-left: 8px;\n  font-size: 16px;\n  border-radius: 4px;\n  border: 1px solid var(--color-light-gray);\n}\n\n.form-input button {\n  width: 56px;\n  margin-left: 16px;\n  line-height: 16px;\n  font-size: 14px;\n  font-weight: 700;\n  border: none;\n  border-radius: 4px;\n  color: var(--color-white);\n  background-color: var(--color-light-blue);\n}\n\n.mt-20px {\n  margin-top: 20px;\n}\n\n.hover-button:hover {\n  background-color: var(--color-dark-blue);\n}\n\n/* table */\n.table {\n  margin: 48px auto 20px;\n  font-size: 16px;\n  line-height: 24px;\n  table-layout: fixed;\n  word-break: break-all;\n  border-collapse: collapse;\n}\n\n.caption {\n  margin-bottom: 16px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.table tr {\n  border: 1px solid var(--color-light-gray);\n  border-width: 1px 0;\n}\n\n.table th {\n  padding: 8px 36px;\n  font-weight: 600;\n}\n\n.table td {\n  text-align: center;\n  padding: 8px 0;\n  font-weight: 400;\n}\n\n.table button {\n  width: 50px;\n  height: 32px;\n  border: 0px;\n  border-radius: 4px;\n  background-color: var(--color-light-white);\n}\n\n.input-width {\n  width: 300px;\n}\n\n.change-button {\n  display: block;\n  margin: 0 auto;\n}\n\n.modify-input {\n  width: 60%;\n  padding: 5px 0;\n}\n\n.purchase-form-width {\n  width: 375px;\n  margin: 0 auto;\n}\n\n/* snackbar */\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 0;\n}\n\n.show {\n  visibility: visible !important; /* Show the snackbar */\n  -webkit-animation: fadein 0.3s, fadeout 0.3s 1.7s;\n  animation: fadein 0.3s, fadeout 0.3s 1.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 0;\n    opacity: 1;\n  }\n  to {\n    bottom: -30px;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./signup.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/signup.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-white: #ffffff;\n  --color-light-white: #f5f5f5;\n  --color-dark-white: #ebebeb;\n  --color-light-gray: #b4b4b4;\n  --color-dark-gray: rgba(0, 0, 0, 0.12);\n  --color-sky-blue: rgba(0, 188, 212, 0.16);\n  --color-light-blue: #00bcd4;\n  --color-dark-blue: #0098ac;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.display-none {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAGA;EACE,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,2BAA2B;EAC3B,sCAAsC;EACtC,yCAAyC;EACzC,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf","sourcesContent":["@import './app.css';\n@import './signup.css';\n\n:root {\n  --color-white: #ffffff;\n  --color-light-white: #f5f5f5;\n  --color-dark-white: #ebebeb;\n  --color-light-gray: #b4b4b4;\n  --color-dark-gray: rgba(0, 0, 0, 0.12);\n  --color-sky-blue: rgba(0, 188, 212, 0.16);\n  --color-light-blue: #00bcd4;\n  --color-dark-blue: #0098ac;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.display-none {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/signup.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/signup.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".check-user {\n  display: block;\n  width: 300px;\n  margin-top: 14px;\n}\n\n.sign-up-button {\n  margin: -30px -70px auto auto;\n}\n\n.sign-up-link {\n  text-decoration-line: none;\n}\n\n.sign-up-link:link,\n.sign-up-link:visited,\n.sign-up-link:active {\n  color: var(--color-light-blue);\n}\n\n.sign-up-link:hover {\n  color: var(--color-dark-blue);\n}\n\n.sign-up-title {\n  margin-bottom: 48px;\n}\n\n.sign-up-form {\n  width: 300px;\n  flex-direction: column;\n}\n\n.sign-up-form label,\n.sign-up-form input {\n  display: block;\n}\n\n.sign-up-form label {\n  margin-bottom: 7px;\n  font-weight: 400;\n}\n\n.sign-up-form input {\n  width: 100%;\n  height: 36px;\n  padding-left: 15px;\n  margin-bottom: 16px;\n}\n\n.blue-button {\n  width: 100%;\n  height: 36px;\n  padding: 6px;\n  margin-top: 30px;\n  line-height: 16px;\n  font-size: 14px;\n  font-weight: 700;\n  border: none;\n  border-radius: 4px;\n  color: var(--color-white);\n  background-color: var(--color-light-blue);\n}\n\n.manager-button {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--color-light-blue);\n}\n\n.password-pattern {\n  display: block;\n  font-size: 11px;\n  margin-bottom: 7px;\n}\n\n.option-list-style {\n  position: absolute;\n  top: 50px;\n  right: 10px;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 2px 2px 3px var(--color-light-gray);\n}\n\n.fadeout-animation {\n  animation: just-fadeout 0.5s;\n}\n\n.fadein-animation {\n  animation: just-fadein 0.5s;\n}\n\n@keyframes just-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes just-fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.modify-info-link,\n.logout-button {\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  background-color: white;\n  border: 1px solid var(--color-light-gray);\n}\n\n.modify-info-link {\n  border-radius: 4px 4px 0 0;\n}\n\n.logout-button {\n  margin-top: -1px;\n  border-radius: 0 0 4px 4px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/signup.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;;;EAGE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,yCAAyC;AAC3C;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;EACE,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,+CAA+C;AACjD;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,uBAAuB;EACvB,yCAAyC;AAC3C;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;AAC5B","sourcesContent":[".check-user {\n  display: block;\n  width: 300px;\n  margin-top: 14px;\n}\n\n.sign-up-button {\n  margin: -30px -70px auto auto;\n}\n\n.sign-up-link {\n  text-decoration-line: none;\n}\n\n.sign-up-link:link,\n.sign-up-link:visited,\n.sign-up-link:active {\n  color: var(--color-light-blue);\n}\n\n.sign-up-link:hover {\n  color: var(--color-dark-blue);\n}\n\n.sign-up-title {\n  margin-bottom: 48px;\n}\n\n.sign-up-form {\n  width: 300px;\n  flex-direction: column;\n}\n\n.sign-up-form label,\n.sign-up-form input {\n  display: block;\n}\n\n.sign-up-form label {\n  margin-bottom: 7px;\n  font-weight: 400;\n}\n\n.sign-up-form input {\n  width: 100%;\n  height: 36px;\n  padding-left: 15px;\n  margin-bottom: 16px;\n}\n\n.blue-button {\n  width: 100%;\n  height: 36px;\n  padding: 6px;\n  margin-top: 30px;\n  line-height: 16px;\n  font-size: 14px;\n  font-weight: 700;\n  border: none;\n  border-radius: 4px;\n  color: var(--color-white);\n  background-color: var(--color-light-blue);\n}\n\n.manager-button {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--color-light-blue);\n}\n\n.password-pattern {\n  display: block;\n  font-size: 11px;\n  margin-bottom: 7px;\n}\n\n.option-list-style {\n  position: absolute;\n  top: 50px;\n  right: 10px;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 2px 2px 3px var(--color-light-gray);\n}\n\n.fadeout-animation {\n  animation: just-fadeout 0.5s;\n}\n\n.fadein-animation {\n  animation: just-fadein 0.5s;\n}\n\n@keyframes just-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes just-fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.modify-info-link,\n.logout-button {\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  background-color: white;\n  border: 1px solid var(--color-light-gray);\n}\n\n.modify-info-link {\n  border-radius: 4px 4px 0 0;\n}\n\n.logout-button {\n  margin-top: -1px;\n  border-radius: 0 0 4px 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/models/Coin.ts":
/*!*******************************!*\
  !*** ./src/js/models/Coin.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Coin)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.js");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorage */ "./src/js/utils/localStorage.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./src/js/models/validation.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Coin_instances, _Coin_coins, _Coin_makeRandomCoins, _Coin_setCoinsInLocalStorage;




class Coin {
    constructor() {
        var _a;
        _Coin_instances.add(this);
        _Coin_coins.set(this, void 0);
        __classPrivateFieldSet(this, _Coin_coins, (_a = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)('coins')) !== null && _a !== void 0 ? _a : { 500: 0, 100: 0, 50: 0, 10: 0 }, "f");
    }
    addAmount(chargedAmount) {
        const currentAmount = this.getAmount() + chargedAmount;
        if (!(0,_validation__WEBPACK_IMPORTED_MODULE_3__.validAmount)(chargedAmount, currentAmount))
            return;
        __classPrivateFieldGet(this, _Coin_instances, "m", _Coin_makeRandomCoins).call(this, chargedAmount);
        __classPrivateFieldGet(this, _Coin_instances, "m", _Coin_setCoinsInLocalStorage).call(this);
    }
    getAmount() {
        const totalAmount = Object.entries(__classPrivateFieldGet(this, _Coin_coins, "f")).reduce((acc, [coin, count]) => {
            return acc + Number(coin) * count;
        }, 0);
        return totalAmount;
    }
    getCoins() {
        return __classPrivateFieldGet(this, _Coin_coins, "f");
    }
    returnCoin(userAmount) {
        let remainCoins = {
            500: 0,
            100: 0,
            50: 0,
            10: 0,
        };
        let currentAmount = userAmount;
        _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COIN.UNIT_LIST.forEach((coin) => {
            const maxCoinCount = Math.floor(currentAmount / coin);
            const coinCount = Math.min(maxCoinCount, __classPrivateFieldGet(this, _Coin_coins, "f")[coin]);
            __classPrivateFieldGet(this, _Coin_coins, "f")[coin] -= coinCount;
            remainCoins[coin] = coinCount;
            currentAmount -= coinCount * coin;
        });
        __classPrivateFieldGet(this, _Coin_instances, "m", _Coin_setCoinsInLocalStorage).call(this);
        return [remainCoins, currentAmount];
    }
}
_Coin_coins = new WeakMap(), _Coin_instances = new WeakSet(), _Coin_makeRandomCoins = function _Coin_makeRandomCoins(amount) {
    let currentAmount = amount;
    _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COIN.UNIT_LIST.forEach((coin) => {
        const maxCoinCount = Math.floor(currentAmount / coin);
        const coinCount = coin === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COIN.MIN_UNIT ? maxCoinCount : (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(maxCoinCount);
        currentAmount -= coinCount * coin;
        __classPrivateFieldGet(this, _Coin_coins, "f")[coin] += coinCount;
    });
}, _Coin_setCoinsInLocalStorage = function _Coin_setCoinsInLocalStorage() {
    (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)('coins', __classPrivateFieldGet(this, _Coin_coins, "f"));
};


/***/ }),

/***/ "./src/js/models/ProductManger.ts":
/*!****************************************!*\
  !*** ./src/js/models/ProductManger.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductManager)
/* harmony export */ });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./src/js/models/validation.ts");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorage */ "./src/js/utils/localStorage.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProductManager_instances, _ProductManager_products, _ProductManager_setProductsInLocalStorage;


class ProductManager {
    constructor() {
        var _a;
        _ProductManager_instances.add(this);
        _ProductManager_products.set(this, void 0);
        __classPrivateFieldSet(this, _ProductManager_products, (_a = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)('products')) !== null && _a !== void 0 ? _a : [], "f");
    }
    addProduct(product) {
        if (!(0,_validation__WEBPACK_IMPORTED_MODULE_0__.validProductInfo)(product, __classPrivateFieldGet(this, _ProductManager_products, "f")))
            return;
        __classPrivateFieldGet(this, _ProductManager_products, "f").push(product);
        __classPrivateFieldGet(this, _ProductManager_instances, "m", _ProductManager_setProductsInLocalStorage).call(this);
    }
    getProducts() {
        return __classPrivateFieldGet(this, _ProductManager_products, "f");
    }
    modifyProduct(index, product) {
        const productsList = [...__classPrivateFieldGet(this, _ProductManager_products, "f")];
        productsList.splice(index, 1);
        if (!(0,_validation__WEBPACK_IMPORTED_MODULE_0__.validProductInfo)(product, productsList))
            return;
        __classPrivateFieldGet(this, _ProductManager_products, "f").splice(index, 1, product);
        __classPrivateFieldGet(this, _ProductManager_instances, "m", _ProductManager_setProductsInLocalStorage).call(this);
    }
    deleteProduct(index) {
        __classPrivateFieldGet(this, _ProductManager_products, "f").splice(index, 1);
        __classPrivateFieldGet(this, _ProductManager_instances, "m", _ProductManager_setProductsInLocalStorage).call(this);
    }
    purchaseProduct(index, userAmount) {
        const { price } = __classPrivateFieldGet(this, _ProductManager_products, "f")[index];
        if (!(0,_validation__WEBPACK_IMPORTED_MODULE_0__.validProductPurchase)(price, userAmount))
            return;
        __classPrivateFieldGet(this, _ProductManager_products, "f")[index].quantity -= 1;
        if (__classPrivateFieldGet(this, _ProductManager_products, "f")[index].quantity === 0) {
            this.deleteProduct(index);
        }
        __classPrivateFieldGet(this, _ProductManager_instances, "m", _ProductManager_setProductsInLocalStorage).call(this);
        return price;
    }
}
_ProductManager_products = new WeakMap(), _ProductManager_instances = new WeakSet(), _ProductManager_setProductsInLocalStorage = function _ProductManager_setProductsInLocalStorage() {
    (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)('products', __classPrivateFieldGet(this, _ProductManager_products, "f"));
};


/***/ }),

/***/ "./src/js/models/ProductPurchase.ts":
/*!******************************************!*\
  !*** ./src/js/models/ProductPurchase.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductPurchase)
/* harmony export */ });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./src/js/models/validation.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProductPurchase_userAmount;

class ProductPurchase {
    constructor() {
        _ProductPurchase_userAmount.set(this, void 0);
        __classPrivateFieldSet(this, _ProductPurchase_userAmount, 0, "f");
    }
    addUserAmount(currentUserAmount) {
        const totalUserAmount = __classPrivateFieldGet(this, _ProductPurchase_userAmount, "f") + currentUserAmount;
        if (!(0,_validation__WEBPACK_IMPORTED_MODULE_0__.validAmount)(currentUserAmount, totalUserAmount))
            return;
        __classPrivateFieldSet(this, _ProductPurchase_userAmount, totalUserAmount, "f");
    }
    getUserAmount() {
        return __classPrivateFieldGet(this, _ProductPurchase_userAmount, "f");
    }
    spendAmount(price) {
        __classPrivateFieldSet(this, _ProductPurchase_userAmount, __classPrivateFieldGet(this, _ProductPurchase_userAmount, "f") - price, "f");
        return __classPrivateFieldGet(this, _ProductPurchase_userAmount, "f");
    }
    setUserAmount(currentAmount) {
        __classPrivateFieldSet(this, _ProductPurchase_userAmount, currentAmount, "f");
    }
}
_ProductPurchase_userAmount = new WeakMap();


/***/ }),

/***/ "./src/js/models/validation.ts":
/*!*************************************!*\
  !*** ./src/js/models/validation.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validProductInfo": () => (/* binding */ validProductInfo),
/* harmony export */   "validAmount": () => (/* binding */ validAmount),
/* harmony export */   "validProductPurchase": () => (/* binding */ validProductPurchase)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/js/utils/common.js");


const isDuplicateProduct = (name, products) => {
    return products.some((product) => product.name === name);
};
const validProductInfo = ({ name, price, quantity }, products) => {
    if ((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(name)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EMPTY_NAME);
    }
    if (Number.isNaN(price)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EMPTY_PRICE);
    }
    if (Number.isNaN(quantity)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EMPTY_QUANTITY);
    }
    if (isDuplicateProduct(name, products)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.DUPLICATE_PRODUCT);
    }
    if ((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isMaximumLength)(name, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT.MAX_LENGTH)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.OVER_MAX_LENGTH);
    }
    if ((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isDivideUnit)(price, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT.PRICE_UNIT)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_DIVIDE_NUMBER);
    }
    if ((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isRangeNumber)(price, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT.PRICE_RANGE.MIN, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT.PRICE_RANGE.MAX)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.OUT_OF_PRICE_RANGE);
    }
    if ((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isRangeNumber)(quantity, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT.QUANTITY_RANGE.MIN, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT.QUANTITY_RANGE.MAX)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.OUT_OF_QUANTITY_RANGE);
    }
    return true;
};
const validAmount = (amount, totalAmount) => {
    if ((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isDivideUnit)(amount, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COIN.MIN_UNIT)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_DIVIDE_NUMBER);
    }
    if ((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isOverMaxNumber)(totalAmount, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.COIN.MAX_AMOUNT)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.OVER_MAX_AMOUNT);
    }
    return true;
};
const validProductPurchase = (price, userAmount) => {
    if ((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isOverMaxNumber)(price, userAmount)) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.OVER_USER_AMOUNT);
    }
    return true;
};


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/js/manager.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index */ "./src/css/index.css");
/* harmony import */ var _route_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route/route */ "./src/js/route/route.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_sessionStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/sessionStorage */ "./src/js/utils/sessionStorage.js");






var _getSessionStorage = (0,_utils_sessionStorage__WEBPACK_IMPORTED_MODULE_4__.getSessionStorage)('user'),
    accessToken = _getSessionStorage.accessToken,
    user = _getSessionStorage.user;

if (!accessToken) {
  location.href = './index.html';
}

var managerNameButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('#manager-name-button');
var optionList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('#option-list');
var logoutButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)('#logout');
managerNameButton.textContent = user.name[0];
managerNameButton.addEventListener('click', makeAnimation);
logoutButton.addEventListener('click', logout);

function makeAnimation() {
  optionList.classList.toggle('fadein-animation');
  optionList.classList.toggle('fadeout-animation');

  if (optionList.classList.contains('display-none')) {
    optionList.classList.remove('display-none');
  } else {
    setTimeout(function () {
      optionList.classList.add('display-none');
    }, 300);
  }
}

function logout() {
  (0,_utils_sessionStorage__WEBPACK_IMPORTED_MODULE_4__.removeSessionStorage)('user');
  location.href = './index.html';
}
})();

/******/ })()
;
//# sourceMappingURL=manager.bundle.js.map
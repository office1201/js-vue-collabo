import View from './View.js';

const tag = ['FormView'];

const FormView = Object.create(View);

FormView.setup = function (el) {
  this.init(el);
  this.inputEl = document.querySelector('[type=text]');
  this.resetEl = document.querySelector('[type=reset]');
  this.showResetBtn(false);
  this.bindEvents();
  return this;
};

FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? 'block' : 'none';
};

FormView.bindEvents = function () {
  this.inputEl.addEventListener('keyup', () => this.onKeyup());
};

FormView.onKeyup = function () {
  this.showResetBtn(this.inputEl.value.length);
};

export default FormView;

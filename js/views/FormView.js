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
  this.on('submit', (e) => e.preventDefault());
  this.inputEl.addEventListener('keyup', (e) => this.onKeyup(e));
};

FormView.onKeyup = function (e) {
  this.showResetBtn(this.inputEl.value.length);
  if (e.keyCode !== 13) return; // enter
  this.emit('@submit', { data: this.inputEl.value });
};

export default FormView;

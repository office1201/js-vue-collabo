import View from './View.js';

const tag = ['FormView'];

const FormView = Object.create(View);

FormView.setup = function (el) {
  this.init(el);
  this.inputEl = document.querySelector('[type=text]');
  this.resetEl = document.querySelector('[type=reset]');
  this.showResetBtn(false);
};

FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? 'block' : 'none';
};

export default FormView;

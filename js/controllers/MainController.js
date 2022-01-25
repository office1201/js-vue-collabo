import FormView from '../views/FormView.js';

const tag = ['MainController'];

export default {
  init() {
    // throw tag;
    FormView.setup(document.querySelector('form'));
  },
};

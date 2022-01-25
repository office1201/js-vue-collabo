import View from './View.js';

const tag = ['ResultView'];

const ResultView = Object.create(View);

ResultView.setup = function (el) {
  this.init(el);
  return this;
};

ResultView.render = function (data = []) {
  this.el.innerHTML = data.length ? this.getSearchResultHtml(data) : '검색 결과가 없습니다';
};

ResultView.getSearchResultHtml = function (data) {
  console.log(data);
  debugger;
};

export default ResultView;

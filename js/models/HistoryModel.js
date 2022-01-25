export default {
  data: [
    { keyword: '검색기록2', date: '01.25' },
    { keyword: '검색기록1', date: '01.24' },
    { keyword: '검색기록0', date: '01.23' },
  ],

  async init() {
    const response = await new Promise((res) => res(this.data));
    return response;
  },

  add(keyword = '') {
    keyword = keyword.trim();
    if (!keyword) return;
    if (this.data.some((item) => item.keyword === keyword)) {
      this.remove(keyword);
    }

    const date = '01.26';
    this.data = [{ keyword, date }, ...this.data];
  },

  remove(keyword) {
    this.data = this.data.filter((item) => item.keyword !== keyword);
  },
};

const tag = ['KeywordModel'];

export default {
  data: [
    {
      keyword: '홈메이드',
    },
    {
      keyword: '가정',
    },
    {
      keyword: '저녁',
    },
    {
      keyword: '파티용',
    },
  ],

  async list() {
    const response = await new Promise((res) => {
      setTimeout(() => {
        res(this.data);
      }, 200);
    });
    return response;
  },
};

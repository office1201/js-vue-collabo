const data = [
  {
    id: 1,
    name: '[메인] 캐럿 디저트 100g',
    image: 'https://i.pinimg.com/564x/8f/f2/80/8ff28089405f2ad7daea1174bc6b5204.jpg',
  },
  {
    id: 2,
    name: '[메인] 디저트 3종 세트',
    image: 'https://t1.daumcdn.net/cfile/tistory/99686D3359A70C0E1C',
  },
  {
    id: 3,
    name: '[메인] 라이스 플라워 디저트',
    image: 'https://static.hubzum.zumst.com/2018/03/27/09/2bad85dd2fcf456c8b1bea52a2bfe6c5.jpg',
  },
];

export default {
  async list(query) {
    const response = await new Promise((res) => {
      setTimeout(() => {
        res(data);
      }, 200);
    });
    return response;
  },
};

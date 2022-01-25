const tag = ['View'];

export default {
  /* 주입 */
  init(el) {
    if (!el) throw el;
    this.el = el;
    return this;
  },
  /* 동작 */
  on(event, handler) {
    this.el.addEventListener(event, handler);
    return this;
  },
  /* 방출 */
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.el.dispatchEvent(evt);
    return this;
  },
  /* 숨김 */
  hide() {
    this.el.style.display = 'none';
  },
  /* 보임 */
  show() {
    this.el.style.display = '';
  },
};

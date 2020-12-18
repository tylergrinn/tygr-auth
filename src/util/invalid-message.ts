const invalidMessage = (msg: string) => ({
  ref(el: HTMLInputElement | null) {
    if (el) {
      el.addEventListener('invalid', () => el.setCustomValidity(msg));
      el.addEventListener('input', () => el.setCustomValidity(''));
    }
  },
});

export default invalidMessage;

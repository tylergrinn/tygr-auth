export default function invalidMessage(msg: string) {
  return {
    ref(el: HTMLInputElement | null) {
      if (el) {
        el.addEventListener('invalid', () => el.setCustomValidity(msg));
        el.addEventListener('input', () => el.setCustomValidity(''));
      }
    },
  };
}

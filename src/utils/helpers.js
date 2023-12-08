export const cn = (...classList) => classList.length !== 0
  ? classList.filter(className => className.trim() !== '').join(' ')
  : '';
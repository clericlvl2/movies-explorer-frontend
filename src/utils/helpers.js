export const getClassName = (...classList) => classList.length !== 0
  ? classList.filter(className => className.trim() !== '').join(' ')
  : '';
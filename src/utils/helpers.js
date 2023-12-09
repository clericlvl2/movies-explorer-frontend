export const cn = (...classList) => {
  const isEmpty = classList.length === 0;

  if (isEmpty) {
    return '';
  }

  return classList
    .filter(value => typeof value === 'string' ? value.trim() !== '' : Boolean(value))
    .join(' ');
}

export const getPath = (route) => '/' + route;

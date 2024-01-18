export const handleError = (err) => {
  console.error(`Произошла ошибка. Статус: ${err.status}.`)
}

export const getMovieImageURL = (relativeURL) => `https://api.nomoreparties.co${relativeURL}`;
export const isDefined = (value) => value !== null && value !== 'undefined'
export const isEmptyObject = (object) => !Object.values(object).some(Boolean);
export const getRoutePath = (route) => '/' + route;

export const classnames = (...classList) => {
  const isEmptyList = classList.length === 0;

  if (isEmptyList) {
    return '';
  }

  return classList
    .filter(className => typeof className === 'string' ? className.trim() !== '' : Boolean(className))
    .join(' ');
}

export function splitArray(array, index) {
  const firstHalf = array.slice(0, index);
  const secondHalf = array.slice(index);

  return [firstHalf, secondHalf];
}

export const deleteElementById = (array, idToDelete, idKey = 'id') => {
  const indexToDelete = array.findIndex(element => element[idKey] === idToDelete);

  if (indexToDelete === -1) {
    return;
  }

  array.splice(indexToDelete, 1);
}

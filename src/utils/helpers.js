export const handleError = (err) => {
  console.error(`Произошла ошибка. Статус: ${err.status}.`)
}

export const getMovieImageURL = (relativeURL) => `https://api.nomoreparties.co${relativeURL}`;
export const isDefined = (value) => value !== null && value !== 'undefined'
export const isEmptyObject = (obj) => !Object.values(obj).some(Boolean);
export const getPath = (route) => '/' + route;

export const cn = (...classList) => {
  const isEmpty = classList.length === 0;

  if (isEmpty) {
    return '';
  }

  return classList
    .filter(value => typeof value === 'string' ? value.trim() !== '' : Boolean(value))
    .join(' ');
}

export function splitArray(array, index) {
  const firstHalf = array.slice(0, index);
  const secondHalf = array.slice(index);

  return [firstHalf, secondHalf];
}

export const deleteElementById = (arr, idToDelete, idKey = 'id') => {
  const indexToDelete = arr.findIndex(element => element[idKey] === idToDelete);

  if (indexToDelete === -1) {
    return;
  }

  arr.splice(indexToDelete, 1);
}

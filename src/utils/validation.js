export const NAME_FIELD_PATTERN = "[A-Za-zА-Яа-я \\-]+"
export const EMAIL_FIELD_PATTERN = "[A-Za-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,4}$";

export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 30;

export const MIN_PASSWORD_LENGTH = 2;
export const MAX_PASSWORD_LENGTH = 30;

export const PATTERN_ERROR  = {
  NAME: 'Разрешены только латинские и кириллические символы, пробел и дефис.',
  EMAIL: 'Проверьте правильность ввода поля E-mail электронной почты',
};

export const NOTIFICATION_MESSAGE  = {
  USER_UPDATE: 'Обновление данных пользователя прошло успешно.',
  LOGIN: 'Пользователь вошёл в систему.',
  MOVIES_NOT_FOUND: 'По результатам запроса фильмов не найдено.'
};

export const NOTIFICATION_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export const VALIDATION_PATTERN_OPTIONS = {
  name: PATTERN_ERROR.NAME,
  email: PATTERN_ERROR.EMAIL
}

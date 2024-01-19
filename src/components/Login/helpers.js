export const getErrorMessageByStatus = (status) => {
  switch (String(status)) {
    case '401': {
      return 'Вы ввели неправильный логин или пароль.';
    }
    default: {
      return 'При авторизации пользователя произошла ошибка.';
    }
  }
}
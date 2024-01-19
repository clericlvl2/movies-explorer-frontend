export const getErrorMessageByStatus = (status) => {
  switch (String(status)) {
    case '409': {
      return 'Пользователь с таким email уже существует.';
    }
    default: {
      return 'При обновлении профиля произошла ошибка.';
    }
  }
}
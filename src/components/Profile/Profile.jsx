import { useContext, useEffect, useState } from "react";
import ProfileInput from "../ProfileInput/ProfileInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./Profile.css"
import {
  MAX_NAME_LENGTH,
  MIN_NAME_LENGTH,
  NAME_FIELD_PATTERN,
  SUCCESSFUL_USER_UPDATE_MESSAGE
} from "../../utils/validation";
import mainApi from "../../utils/api/MainApi";
import { useFormWithValidation } from "../../hooks/useFormWIthValidation";
import { handleError, isEmptyObject } from "../../utils/helpers";
import UserContext from "../../contexts/UserContext";

const getErrorMessageByStatus = (status) => {
  switch (String(status)) {
    case '409': {
      return 'Пользователь с таким email уже существует.';
    }
    default: {
      return 'При обновлении профиля произошла ошибка.';
    }
  }
}

const NOTIFICATION_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
};

const Profile = ({ onUpdateUser, onLogOut }) => {
  const { user } = useContext(UserContext);
  const { form, handleChange, errors } = useFormWithValidation({
    name: user.name,
    email: user.email
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const hasFormValues = form.name && form.email;
  const hasErrors = !isEmptyObject(errors);

  useEffect(() => {
    updateErrorNotification();
  }, [serverError, errors]);

  const toggleEditMode = () => setIsEditMode(mode => !mode);

  const createNotification = (type, message) => {
    setNotification({ type, message })
  };

  const resetNotification = () => {
    setNotification(null)
  };

  const getChangedUserData = () => {
    const dataToUpdate = {};

    for (let key in form) {
      if (form[key] !== user[key]) {
        dataToUpdate[key] = form[key];
      }
    }

    return dataToUpdate;
  }

  const updateUser = async () => {
    const dataToUpdate = getChangedUserData();
    const hasChanges = !isEmptyObject(dataToUpdate);

    if (!hasChanges) {
      toggleEditMode();
      resetNotification();
      return;
    }

    try {
      setIsLoading(true);
      const { data } = await mainApi.updateUser(dataToUpdate);

      if (data) {
        onUpdateUser(data);
        toggleEditMode();
        createNotification(NOTIFICATION_TYPE.SUCCESS, SUCCESSFUL_USER_UPDATE_MESSAGE);
      }
    } catch (err) {
      handleError(err);
      setServerError(getErrorMessageByStatus())
    }
    finally {
      setIsLoading(false)
    }
  }

  const logOut = async () => {
    try {
      setIsLoading(true);
      const { message } = await mainApi.logOut();

      if (message) {
        onLogOut();
      }
    } catch (err) {
      handleError(err);
      setServerError(getErrorMessageByStatus(err.status))
    }
    finally {
      setIsLoading(false)
    }
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    updateUser(form);
  }

  const updateErrorNotification = () => {
    const validationErrors = Object.values(errors).filter(Boolean);
    const errorsStack = [...validationErrors, serverError];
    const hasErrors = errorsStack.length > 0;

    return hasErrors
      ? createNotification(NOTIFICATION_TYPE.ERROR, errorsStack[0])
      : resetNotification();
  }

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={onSubmit}>
        <h1 className="profile__title">Привет, Артем!</h1>
        <ProfileInput
          label="Имя"
          id="name-profile"
          name="name"
          type="text"
          placeholder="Введите имя"
          value={form.name}
          errorMessage={errors.name}
          pattern={NAME_FIELD_PATTERN}
          minLength={MIN_NAME_LENGTH}
          maxLength={MAX_NAME_LENGTH}
          onChange={handleChange}
          hasSeparator
          disabled={!isEditMode}
        />
        <ProfileInput
          label="E-mail"
          id="email-profile"
          name="email"
          type="email"
          placeholder="Введите e-mail"
          value={form.email}
          errorMessage={errors.email}
          onChange={handleChange}
          disabled={!isEditMode}
        />

        <div className="profile__button-panel">
          {isEditMode ? (
            <div className="profile__submit-button-container">
              {notification?.type === NOTIFICATION_TYPE.ERROR && (
                <span className={`profile__notification profile__notification_type_${notification.type}`}>
                  {notification.message}
                </span>
              )}
              <SubmitButton
                label="Сохранить"
                className="profile__button_type_submit"
                isLoading={isLoading}
                isDisabled={hasErrors || !hasFormValues}
              />
            </div>
          ) : (
            <>
              {notification?.type === NOTIFICATION_TYPE.SUCCESS && (
                <span className={`profile__notification profile__notification_type_success`}>
                  {notification.message}
                </span>
              )}
              <button
                className="profile__button profile__button_type_edit"
                type="button"
                onClick={toggleEditMode}
              >
                Редактировать
              </button>
              <button
                className="profile__button profile__button_type_logout "
                type="button"
                onClick={logOut}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </div>
      </form>
    </main>
  );
}

export default Profile;

import { useState } from "react";
import ProfileInput from "../ProfileInput/ProfileInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useForm } from "../../hooks/useForm";
import "./Profile.css"

const DEFAULT_FORM_VALUES = {
  name: 'Пользователь',
  email: 'test@example.com'
}

const Profile = ({ onLogOut }) => {
  const { values, handleChange } = useForm(DEFAULT_FORM_VALUES);
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => setIsEditMode(mode => !mode);

  const onSubmit = (evt) => {
    evt.preventDefault();
    toggleEditMode();
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
          value={values.name}
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
          value={values.email}
          onChange={handleChange}
          disabled={!isEditMode}
        />


        <div className="profile__button-panel">
          {isEditMode ? (
            <SubmitButton
              label="Сохранить"
              className="profile__button_type_submit"
            />
          ) : (
            <>
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
                onClick={onLogOut}
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

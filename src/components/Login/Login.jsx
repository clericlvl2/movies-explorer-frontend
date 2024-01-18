import { useState } from "react";
import AuthLayout from "../AuthLayout/AuthLayout";
import AuthInput from "../AuthInput/AuthInput";
import { PATH } from "../../utils/constants";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "../../utils/validation";
import { useFormWithValidation } from "../../hooks/useFormWIthValidation";
import mainApi from "../../utils/api/MainApi";
import { handleError } from "../../utils/helpers";

const DEFAULT_FORM_VALUES = {
  email: '',
  password: ''
};

const getErrorMessageByStatus = (status) => {
  switch (String(status)) {
    case '401': {
      return 'Вы ввели неправильный логин или пароль.';
    }
    default: {
      return 'При авторизации пользователя произошла ошибка.';
    }
  }
}

const Login = ({ onLogin }) => {
  const { form, handleChange, errors, isValid } = useFormWithValidation(DEFAULT_FORM_VALUES);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  const submitButtonOptions = {
    isLoading,
    isDisabled: !isValid,
    label: "Войти"
  };

  const logInClickHandler = async (formData) => {
    try {
      setIsLoading(true);

      await mainApi.logIn(formData);
      const { data } = await mainApi.getUser();

      if (data) {
        onLogin(data);
      }
    } catch (err) {
      handleError(err);
      setServerError(getErrorMessageByStatus(err.status));
    }
    finally {
      setIsLoading(false)
    }
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    setServerError(null);
    logInClickHandler(form);
  };

  return (
    <AuthLayout
      title="Рады видеть!"
      hint="Ещё не зарегистрированы?"
      linkURL={PATH.SIGN_UP}
      linkCaption="Регистрация"
      submitButtonOptions={submitButtonOptions}
      serverError={serverError}
      onSubmit={onSubmit}
    >
      <AuthInput
        label="E-mail"
        required
        id="email-login"
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        errorMessage={errors.email}
        onChange={handleChange}
      />
      <AuthInput
        label="Пароль"
        min={MIN_PASSWORD_LENGTH}
        max={MAX_PASSWORD_LENGTH}
        required
        id="password-login"
        name="password"
        type="password"
        placeholder="Пароль"
        value={form.password}
        errorMessage={errors.password}
        onChange={handleChange}
      />
    </AuthLayout>
  )
};

export default Login

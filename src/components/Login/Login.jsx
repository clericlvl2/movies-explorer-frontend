import { useState } from "react";
import AuthLayout from "../AuthLayout/AuthLayout";
import AuthInput from "../AuthInput/AuthInput";
import { PATH } from "../../utils/constants";
import {
  EMAIL_FIELD_PATTERN,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  PATTERN_ERROR,
} from "../../utils/validation";
import { useFormWithValidation } from "../../hooks/useFormWIthValidation";
import mainApi from "../../utils/api/MainApi";
import { handleError } from "../../utils/helpers";
import { getErrorMessageByStatus } from "./helpers";
import { DEFAULT_FORM_VALUES } from "./constants";

const Login = ({ onLogin }) => {
  const { form, handleChange, errors, isValid } = useFormWithValidation(DEFAULT_FORM_VALUES, {
    email: PATTERN_ERROR.EMAIL
  });
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

      const { message } = await mainApi.logIn(formData);
      const { data } = await mainApi.getUser();

      if (data && message) {
        onLogin(data);
      }
    } catch (err) {
      handleError(err);
      setServerError(getErrorMessageByStatus(err.status));
    } finally {
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
        pattern={EMAIL_FIELD_PATTERN}
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

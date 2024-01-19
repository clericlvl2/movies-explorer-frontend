import { useState } from "react";
import AuthLayout from "../AuthLayout/AuthLayout";
import AuthInput from "../AuthInput/AuthInput";
import { PATH } from "../../utils/constants";
import {
  EMAIL_FIELD_PATTERN,
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  NAME_FIELD_PATTERN,
  VALIDATION_PATTERN_OPTIONS
} from "../../utils/validation";
import { useFormWithValidation } from "../../hooks/useFormWIthValidation";
import mainApi from "../../utils/api/MainApi";
import { handleError, isEmptyObject } from "../../utils/helpers";
import { DEFAULT_FORM_VALUES } from "./constants";
import { getErrorMessageByStatus } from "./helpers";

const Register = ({ onRegister }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  const { form, handleChange, errors, isValid } = useFormWithValidation(
    DEFAULT_FORM_VALUES,
    VALIDATION_PATTERN_OPTIONS
  );

  const isEmptyForm = isEmptyObject(form);

  const submitButtonOptions = {
    isLoading,
    isDisabled: !isValid || isEmptyForm,
    label: "Зарегистрировться"
  };

  const registerClickHandler = async (formData) => {
    try {
      setIsLoading(true);
      const { data } = await mainApi.register(formData);
      const { message } = await mainApi.logIn({
        email: formData.email,
        password: formData.password
      });

      if (data && message) {
        onRegister(data);
      }
    } catch (err) {
      handleError(err);
      setServerError(getErrorMessageByStatus(err.status));
    }
    finally {
      setIsLoading(false);
    }
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    setServerError(null);
    registerClickHandler(form);
  };

  return (
    <AuthLayout
      title="Добро пожаловать!"
      hint="Уже зарегистрированы?"
      linkCaption="Войти"
      linkURL={PATH.SIGN_IN}
      submitButtonOptions={submitButtonOptions}
      serverError={serverError}
      onSubmit={onSubmit}
    >
      <AuthInput
        label="Имя"
        required
        minLength={MIN_NAME_LENGTH}
        maxLength={MAX_NAME_LENGTH}
        pattern={NAME_FIELD_PATTERN}
        id="name-register"
        name="name"
        type="text"
        placeholder="Имя"
        value={form.name}
        errorMessage={errors.name}
        onChange={handleChange}
      />
      <AuthInput
        label="E-mail"
        required
        id="email-register"
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
        required
        minLength={MIN_PASSWORD_LENGTH}
        maxLength={MAX_PASSWORD_LENGTH}
        id="password-register"
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

export default Register

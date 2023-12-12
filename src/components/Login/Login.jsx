import { useContext } from "react";
import AuthLayout from "../AuthLayout/AuthLayout";
import AuthInput from "../AuthInput/AuthInput";
import { useForm } from "../../hooks/useForm";
import UserContext from "../../contexts/UserContext";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH, PATH } from "../../utils/constants";

const DEFAULT_FORM_VALUES = {
  email: '',
  password: ''
}

const Login = () => {
  const { values, handleChange } = useForm(DEFAULT_FORM_VALUES);
  const { logIn } = useContext(UserContext)

  const onSubmit = (evt) => {
    evt.preventDefault();
    logIn();
  }

  return (
    <AuthLayout
      title="Рады видеть!"
      hint="Ещё не зарегистрированы?"
      linkURL={PATH.SIGN_UP}
      linkCaption="Регистрация"
      submitCaption="Войти"
      onSubmit={onSubmit}
    >
      <AuthInput
        label="E-mail"
        required
        id="email-login"
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
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
        value={values.password}
        onChange={handleChange}
      />
    </AuthLayout>
  )
};

export default Login

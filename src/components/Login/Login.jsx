import AuthLayout from "../AuthLayout/AuthLayout";
import AuthInput from "../AuthInput/AuthInput";
import { useForm } from "../../hooks/useForm";

const DEFAULT_FORM_VALUES = {
  email: '',
  password: ''
}

const Login = () => {
  const { values, handleChange } = useForm(DEFAULT_FORM_VALUES);

  const onSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <AuthLayout
      title="Рады видеть!"
      hint="Ещё не зарегистрированы?"
      linkCaption="Регистрация"
      submitCaption="Войти"
      onSubmit={onSubmit}
      isLoading
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

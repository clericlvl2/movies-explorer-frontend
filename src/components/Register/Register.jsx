import AuthLayout from "../AuthLayout/AuthLayout";
import AuthInput from "../AuthInput/AuthInput";
import { useForm } from "../../hooks/useForm";

const DEFAULT_FORM_VALUES = {
  name: '',
  email: '',
  password: ''
}

const Register = () => {
  const { values, handleChange } = useForm(DEFAULT_FORM_VALUES);

  const onSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <AuthLayout
      title="Добро пожаловать!"
      hint="Уже зарегистрированы?"
      linkCaption="Войти"
      submitCaption="Зарегистрировться"
      onSubmit={onSubmit}
    >
      <AuthInput
        label="E-mail"
        required
        id="name-register"
        name="name"
        type="text"
        placeholder="Имя"
        value={values.name}
        onChange={handleChange}
      />
      <AuthInput
        label="E-mail"
        required
        id="email-register"
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <AuthInput
        label="Пароль"
        required
        id="password-register"
        name="password"
        type="password"
        placeholder="Пароль"
        value={values.password}
        onChange={handleChange}
      />
    </AuthLayout>
  )
};

export default Register

import { useNavigate } from "react-router-dom";
import AuthLayout from "../AuthLayout/AuthLayout";
import AuthInput from "../AuthInput/AuthInput";
import { useForm } from "../../hooks/useForm";
import {
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  PATH,
  ROUTE
} from "../../utils/constants";

const DEFAULT_FORM_VALUES = {
  name: '',
  email: '',
  password: ''
}

const Register = () => {
  const { values, handleChange } = useForm(DEFAULT_FORM_VALUES);
  const navigate = useNavigate();

  const toSignIn = () => navigate(ROUTE.SIGN_IN, {replace: true});

  const onSubmit = (evt) => {
    evt.preventDefault();
    toSignIn();
  }

  return (
    <AuthLayout
      title="Добро пожаловать!"
      hint="Уже зарегистрированы?"
      linkURL={PATH.SIGN_IN}
      linkCaption="Войти"
      submitCaption="Зарегистрировться"
      onSubmit={onSubmit}
    >
      <AuthInput
        label="Имя"
        required
        min={MIN_NAME_LENGTH}
        max={MAX_NAME_LENGTH}
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
        min={MIN_PASSWORD_LENGTH}
        max={MAX_PASSWORD_LENGTH}
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

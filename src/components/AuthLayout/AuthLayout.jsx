import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./AuthLayout.css"

const AuthLayout = ({
  title,
  hint,
  linkCaption,
  submitCaption,
  linkURL,
  onSubmit,
  isLoading = false,
  children
}) => (
  <main className="auth-layout">
    <div className="auth-layout__content">
      <div className="auth-layout__header">
        <Logo />
        <h1 className="auth-layout__title">{title}</h1>
      </div>

      <form onSubmit={onSubmit} className="auth-layout__form">
        {children}
        <SubmitButton
          isLoading={isLoading}
          label={submitCaption}
          className="auth-layout__submit-button"
        />
      </form>

      <div className="auth-layout__link-container">
        <span className="auth-layout__hint">{hint}</span>
        &nbsp;
        <Link className="auth-layout__link" to={linkURL}>{linkCaption}</Link>
      </div>
    </div>
  </main>
);

export default AuthLayout

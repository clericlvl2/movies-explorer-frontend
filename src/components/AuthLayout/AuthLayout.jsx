import Logo from "../Logo/Logo";
import SubmitButton from "../SubmitButton/SubmitButton";
import './AuthLayout.css'

const AuthLayout = ({
  title = 'Привет',
  customLink = 'Cсылка',
  hint = 'Текст рядом с ссылкой.',
  linkCaption = 'Ссылка',
  submitCaption = 'Нажмите',
  linkURL = '#',
  onSubmit,
  isLoading,
  children
}) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__content">
        <div className="auth-layout__header">
          <Logo/>
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

        {customLink && (
          <div className="auth-layout__link-container">
            <span className="auth-layout__hint">{hint}</span>
            &nbsp;
            <a className="auth-layout__link" href={linkURL}>{linkCaption}</a>
          </div>
        )}
      </div>

    </div>
  )
};

export default AuthLayout

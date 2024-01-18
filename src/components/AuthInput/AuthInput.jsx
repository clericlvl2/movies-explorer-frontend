import { forwardRef } from "react";
import { classnames } from "../../utils/helpers";
import "./AuthInput.css"

const AuthInput = forwardRef(({ label, id, className, errorMessage, ...props }, ref) => {
  return (
    <div className="auth-input">
      <label className="auth-input__label" htmlFor={id}>{label}</label>
      <input
        {...props}
        ref={ref}
        id={id}
        className={classnames('auth-input__input', errorMessage && 'auth-input__input_type_error', className)}
      />
      <span className="auth-input__input-error">{errorMessage}</span>
    </div>
  )
})

export default AuthInput

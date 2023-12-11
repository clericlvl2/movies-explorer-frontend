import { forwardRef } from "react";
import "./AuthInput.css"

const AuthInput = forwardRef(({ label, htmlFor, id, className, ...props }, ref) => {
  return (
    <div className="auth-input">
      <label className="auth-input__label" htmlFor={id}>{label}</label>
      <input
        ref={ref}
        id={id}
        {...props}
        className={`auth-input__input ${className}`}
      />
    </div>
  )
})


export default AuthInput

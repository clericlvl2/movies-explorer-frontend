import { forwardRef } from "react";
import "./ProfileInput.css"

const ProfileInput = forwardRef((
  { label, htmlFor, id, className, hasSeparator, ...props },
  ref
) => {
  return (
    <div className={`profile-input ${hasSeparator ? 'profile-input_separated' : ''}`}>
      <label className="profile-input__label" htmlFor={id}>{label}</label>
      <input
        ref={ref}
        id={id}
        {...props}
        className={`profile-input__input ${className}`}
      />
    </div>
  )
})

export default ProfileInput;
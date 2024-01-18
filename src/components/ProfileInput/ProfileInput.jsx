import { forwardRef } from "react";
import "./ProfileInput.css"
import { cn } from "../../utils/helpers";

const ProfileInput = forwardRef((
  { label, id, className, errorMessage, hasSeparator, ...props },
  ref
) => {
  return (
    <div className={cn('profile-input', hasSeparator && 'profile-input_separated')}>
      <label className="profile-input__label" htmlFor={id}>{label}</label>
      <input
        {...props}
        ref={ref}
        id={id}
        className={cn('profile-input__input', errorMessage && 'profile-input__input_type_error', className)}
      />
    </div>
  )
})

export default ProfileInput;
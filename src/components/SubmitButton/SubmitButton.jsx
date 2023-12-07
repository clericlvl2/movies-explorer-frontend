import Spinner from "../Spinner/Spinner";
import './SubmitButton.css'

const SubmitButton = ({ isLoading, className, label = 'Нажми меня' }) => (
  <button
    type="submit"
    className={`submit-button ${isLoading ? 'submit-button_disabled' : ''} ${className}`}
    disabled={isLoading}
  >
    {isLoading ? <Spinner/> : label}
  </button>
);

export default SubmitButton

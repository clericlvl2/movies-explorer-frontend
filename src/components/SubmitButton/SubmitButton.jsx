import Spinner from "../Spinner/Spinner";
import { classnames } from "../../utils/helpers";
import "./SubmitButton.css"

const SubmitButton = ({ className, label, isLoading, isDisabled }) => (
  <button
    type="submit"
    className={classnames('submit-button', className)}
    disabled={isLoading || isDisabled}
  >
    {isLoading ? <Spinner dark /> : label}
  </button>
);

export default SubmitButton

import Spinner from "../Spinner/Spinner";
import { cn } from "../../utils/helpers";
import "./SubmitButton.css"

const SubmitButton = ({ className, label, isLoading, isDisabled }) => (
  <button
    type="submit"
    className={cn('submit-button', className)}
    disabled={isLoading || isDisabled}
  >
    {isLoading ? <Spinner dark /> : label}
  </button>
);

export default SubmitButton

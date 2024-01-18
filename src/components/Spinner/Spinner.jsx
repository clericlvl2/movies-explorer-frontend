import "./Spinner.css"
import { cn } from "../../utils/helpers";

const Spinner = ({ dark = false }) => {
  return (
    <div className="spinner">
      <div className={cn('spinner__content', dark && 'spinner__content_dark')}>
        <i></i>
      </div>
    </div>
  );
};

export default Spinner;

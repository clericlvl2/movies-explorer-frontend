import { classnames } from "../../utils/helpers";
import "./Spinner.css"

const Spinner = ({ dark = false }) => {
  return (
    <div className="spinner">
      <div className={classnames('spinner__content', dark && 'spinner__content_dark')}>
        <i></i>
      </div>
    </div>
  );
};

export default Spinner;

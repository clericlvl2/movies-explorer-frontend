import { Link } from "react-router-dom";
import { PATH } from "../../utils/constants";
import { classnames } from "../../utils/helpers";
import "./Logo.css"

const Logo = ({ className }) => (
  <Link to={PATH.MAIN}>
    <div className={classnames('logo', className)} />
  </Link>

);

export default Logo

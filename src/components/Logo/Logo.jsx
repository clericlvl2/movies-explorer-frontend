import { Link } from "react-router-dom";
import { PATH } from "../../utils/constants";
import { cn } from "../../utils/helpers";
import "./Logo.css"

const Logo = ({ className }) => (
  <Link to={PATH.MAIN}>
    <div className={cn('logo', className)} />
  </Link>

);

export default Logo

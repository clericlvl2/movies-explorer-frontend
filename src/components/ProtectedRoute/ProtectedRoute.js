import { Navigate } from 'react-router-dom';
import { PATH } from "../../utils/constants";

const ProtectedRoute = ({ isLogged, children }) => {
  if (!isLogged) {
    return <Navigate to={PATH.MAIN} replace />;
  }

  return children;
};

export default ProtectedRoute;

import { Navigate } from 'react-router-dom';
import { PATH } from "../../utils/constants";

const ProtectedRoute = ({ hasPermission, children }) => {
  if (!hasPermission) {
    return <Navigate to={PATH.MAIN} replace />;
  }

  return children;
};

export default ProtectedRoute;

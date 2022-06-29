

import {Navigate} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ProtectedRoute = ({children}) => {
  const user = useAuth();
  console.log(user.user.email)
  return user.user.email ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
import { CircularProgress } from '@material-ui/core';
import {Navigate, useLocation} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const ProtectedRoute = ({children}) => {
  const user = useAuth();
  const {isLoading} = useAuth();
  const location = useLocation();

  if(isLoading){return <CircularProgress/>}
  return user.user.email ? children : <Navigate to="/login" state={{from: location}}/>;
};

export default ProtectedRoute;
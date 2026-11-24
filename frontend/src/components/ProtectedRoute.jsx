// Sends visitors to /login and blocks the wrong role (the API checks the role again: NFR-05).
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ role }) {
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

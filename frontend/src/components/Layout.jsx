import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <div className="app">
      <header className="app-header">
        <Link to="/" className="brand">
          المستشفى الأهلي - الخليل
          <span className="brand-sub">حجز المواعيد</span>
        </Link>
        <nav className="nav">
          <NavLink to="/">العيادات</NavLink>
          {user?.role === 'PATIENT' && <NavLink to="/my-requests">طلباتي</NavLink>}
          {user?.role === 'RECEPTIONIST' && (
            <>
              <NavLink to="/admin/requests">لوحة الطلبات</NavLink>
              <NavLink to="/admin/clinics">إدارة العيادات</NavLink>
            </>
          )}
          {isLoggedIn ? (
            <button type="button" className="link-button" onClick={handleLogout}>
              تسجيل الخروج
            </button>
          ) : (
            <>
              <NavLink to="/login">تسجيل الدخول</NavLink>
              <NavLink to="/register">إنشاء حساب</NavLink>
            </>
          )}
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

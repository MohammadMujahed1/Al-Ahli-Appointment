// Page routes (SRS section 13). Protected routes check the role from the token.
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import ClinicsPage from './pages/ClinicsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import NewRequestPage from './pages/patient/NewRequestPage';
import MyRequestsPage from './pages/patient/MyRequestsPage';
import RequestDetailsPage from './pages/patient/RequestDetailsPage';
import DashboardPage from './pages/admin/DashboardPage';
import ManageClinicsPage from './pages/admin/ManageClinicsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ClinicsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute role="PATIENT" />}>
          <Route path="requests/new/:clinicId" element={<NewRequestPage />} />
          <Route path="my-requests" element={<MyRequestsPage />} />
          <Route path="requests/:requestNumber" element={<RequestDetailsPage />} />
        </Route>

        <Route element={<ProtectedRoute role="RECEPTIONIST" />}>
          <Route path="admin/requests" element={<DashboardPage />} />
          <Route path="admin/clinics" element={<ManageClinicsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

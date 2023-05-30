import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { History } from './pages/History';
import { Billing } from './pages/Billing';
import { Login } from './pages/Login';
import Signup from './pages/SignUp';
import { ProtectedLayout } from './layouts/ProtectedLayout';
import { AppCalculator } from './pages/AppCalculator';

export function Router() {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/calculator" element={<AppCalculator />} />
        <Route path="/history" element={<History />} />
        <Route path="/billing" element={<Billing />} />
      </Route>

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

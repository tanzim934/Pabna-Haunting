import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/lib/AuthContext';
import { queryClient } from '@/lib/query-client';
import Shell from '@/components/Shell';
import ScrollToTop from '@/components/ScrollToTop';
import Gateway from '@/pages/Gateway';
import Surveillance from '@/pages/Surveillance';
import Archive from '@/pages/Archive';
import Lockdown from '@/pages/Lockdown';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import Mfa from '@/pages/Mfa';
import OAuthConsent from '@/pages/OAuthConsent';
import PageNotFound from '@/lib/PageNotFound';
export default function App() {
  return <QueryClientProvider client={queryClient}><AuthProvider><BrowserRouter><ScrollToTop/><Routes>
    <Route element={<Shell/>}>
      <Route index element={<Gateway/>}/>
      <Route path="surveillance" element={<Surveillance/>}/>
      <Route path="archive" element={<Archive/>}/>
      <Route path="lockdown" element={<Lockdown/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Route>
    <Route path="login" element={<Login/>}/><Route path="register" element={<Register/>}/>
    <Route path="forgot-password" element={<ForgotPassword/>}/><Route path="reset-password" element={<ResetPassword/>}/>
    <Route path="mfa" element={<Mfa/>}/><Route path="oauth-consent" element={<OAuthConsent/>}/>
  </Routes></BrowserRouter></AuthProvider></QueryClientProvider>;
}

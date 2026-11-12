import { Outlet } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from './UserNotRegisteredError';
/** Optional compatibility component for the original Base44 export. */
export default function ProtectedRoute({ fallback = null, unauthenticatedElement }) {
  const { isAuthenticated, isLoadingAuth, authChecked } = useAuth();
  if (isLoadingAuth || !authChecked) return fallback;
  if (!isAuthenticated) return unauthenticatedElement ?? <UserNotRegisteredError />;
  return <Outlet />;
}

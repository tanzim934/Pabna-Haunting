import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import AuthLayout from '@/components/AuthLayout';
/** Authentication, password-reset and MFA pages are placeholders for an external backend.
 * They never accept or store actual passwords or verification codes. */
export default function InfoAuthPage({ title='Authentication', action='Account sign-in' }) { return <AuthLayout icon={ShieldAlert} title={title} subtitle="Account features are not enabled in the standalone hackathon build."><p className="text-sm leading-7 text-muted-foreground">{action} requires the original Base44 service or another properly configured authentication provider. This deployment intentionally uses a fictional in-game clearance passcode instead, with no real accounts, passwords, SMS or MFA.</p><Link to="/" className="primary-action mt-7 w-full">GO TO THE GAME GATEWAY</Link></AuthLayout>; }

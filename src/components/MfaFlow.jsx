import { ShieldAlert } from 'lucide-react';
import AuthLayout from './AuthLayout';
/** MfaFlow: remote Base44 MFA is intentionally not reproduced in this local hackathon game. */
export default function MfaFlow(){return <AuthLayout icon={ShieldAlert} title="MFA unavailable" subtitle="A real MFA provider is not connected."><p className="text-sm leading-7 text-muted-foreground">Use the fictional Gateway clearance instead. This demo does not generate real one-time codes or store security secrets.</p></AuthLayout>}

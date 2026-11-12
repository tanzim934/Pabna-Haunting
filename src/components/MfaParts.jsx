import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
/** Retained UI interfaces, without pretending that a remote MFA provider is connected. */
export const INVALID_PHONE='Invalid phone number';
export const defaultDialCode=()=>'+880';
export const isPlausiblePhone=phone=>{const len=String(phone).replace(/\D/g,'').length;return len>=7&&len<=15};
export const isTouchDevice=()=>typeof window!=='undefined'&&window.matchMedia('(pointer: coarse)').matches;
export function useAppInfo(){return{name:'The Pabna Haunting',demo:true}}
export function useCooldown(){const [left,setLeft]=useState(0);useEffect(()=>{if(left<=0)return;const timer=setTimeout(()=>setLeft(v=>Math.max(0,v-1)),1000);return()=>clearTimeout(timer)},[left]);return[left,setLeft]}
export function MfaHeader({title,description}){return <div className="mb-6 text-center"><h1 className="text-2xl font-bold">{title}</h1><p className="mt-2 text-sm text-muted-foreground">{description}</p></div>}
export function MfaScreen({children}){return <div className="mx-auto max-w-md px-4 py-16">{children}</div>}
export function MfaNotice(){return <div role="alert" className="rounded-lg border border-primary p-4 text-sm">SMS and MFA require a real provider. <Link to="/" className="underline">Return to the fictional game.</Link></div>}
export function CodeField({id,label='Verification code',value,onChange,onComplete}){return <label htmlFor={id} className="block text-sm">{label}<input id={id} className="game-input mt-2" value={value} maxLength={6} inputMode="numeric" onChange={e=>{const v=e.target.value.replace(/\D/g,'').slice(0,6);onChange?.(v);if(v.length===6)onComplete?.(v)}}/></label>}
export function CopyKeyButton({text}){return <button type="button" className="secondary-action" onClick={()=>navigator.clipboard.writeText(text)}>Copy key</button>}
export function PhoneField({countryCode,phoneNumber,onCountryCodeChange,onPhoneNumberChange}){return <div className="flex gap-2"><input className="game-input w-24" value={countryCode} onChange={e=>onCountryCodeChange?.(e.target.value)}/><input className="game-input" inputMode="tel" value={phoneNumber} onChange={e=>onPhoneNumberChange?.(e.target.value)}/></div>}
export function RememberDevice({checked,onChange}){return <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)}/>Remember this device</label>}
export function ResendLine({cooldown,onResend}){return <div className="text-center text-xs">{cooldown>0?`Retry in ${cooldown}s`:<button type="button" onClick={onResend}>Resend</button>}</div>}

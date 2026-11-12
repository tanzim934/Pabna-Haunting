import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Fingerprint, Radio, RotateCcw } from 'lucide-react';
import { useHaunting, setState, EVIDENCE, resetGame } from '@/lib/haunting';
import { translate } from '@/lib/i18n';
import { sound } from '@/lib/audio';
import EvidencePanel from './EvidencePanel';
const NAV = [{ key:'nav.gateway', to:'/' },{ key:'nav.surveillance', to:'/surveillance' },{ key:'nav.archive', to:'/archive' },{ key:'nav.lockdown', to:'/lockdown' }];
export default function Shell() {
  const state = useHaunting(); const lang = state.lang; const t = key => translate(lang,key);
  const [evidenceOpen,setEvidenceOpen] = useState(false);
  const location=useLocation(); const found=EVIDENCE.filter(e=>state.reveals[e.key]).length;
  useEffect(() => { setEvidenceOpen(false); window.scrollTo({top:0,left:0}); }, [location.pathname]);
  useEffect(() => { sound.setEnabled(state.sound); return () => sound.setEnabled(false); }, [state.sound]);
  return <div lang={lang} className={`relative min-h-screen bg-background ${lang==='bn'?'bn':''}`}>
    <div className="pointer-events-none fixed inset-0 z-[65] hn-noise opacity-[.05] mix-blend-overlay" aria-hidden="true"/><div className="pointer-events-none fixed inset-0 z-[65] hn-scanlines opacity-[.12]" aria-hidden="true"/>
    <header className="sticky top-0 z-[60] border-b border-border/80 bg-background/95 backdrop-blur-lg"><div className="mx-auto max-w-[1280px] px-5 sm:px-9"><div className="flex items-center justify-between gap-4 py-4"><Link to="/" className="flex items-center gap-3"><span className="relative flex h-10 w-10 items-center justify-center rounded-sm border border-primary/50 bg-primary/10"><Radio className="h-5 w-5 text-primary"/></span><span><strong className="block font-mono text-[11px] font-medium uppercase tracking-[.24em]">{t('brand.short')}</strong><span className="block font-mono text-[9px] uppercase tracking-[.15em] text-muted-foreground">{t('brand.tag')}</span></span></Link>
    <div className="flex items-center gap-2"><button type="button" className="icon-button font-mono text-[10px]" aria-label="Switch language" onClick={()=>{setState({lang:lang==='en'?'bn':'en'});sound.click();}}>{lang==='en'?'EN':'বাং'}</button><button type="button" className="icon-button" aria-label={state.sound?t('hud.muted'):t('hud.sound')} onClick={()=>{setState({sound:!state.sound});sound.setEnabled(!state.sound);if(!state.sound)sound.click();}}>{state.sound?<Volume2 className="h-4 w-4"/>:<VolumeX className="h-4 w-4"/>}</button><button type="button" className="icon-button gap-1.5 px-3 font-mono text-xs" aria-label={t('nav.evidence')} onClick={()=>setEvidenceOpen(true)}><Fingerprint className="h-4 w-4 text-primary"/>{found}/6</button></div></div>
    <div className="flex items-center justify-between gap-3"><nav className="flex gap-1 overflow-x-auto pb-2 [scrollbar-width:none]">{NAV.map(item=><NavLink key={item.to} to={item.to} end={item.to==='/'} className={({isActive})=>`shrink-0 border-b px-3 py-2 font-mono text-[10px] uppercase tracking-[.15em] transition-colors ${isActive?'border-primary text-foreground':'border-transparent text-muted-foreground hover:text-foreground'}`}>{t(item.key)}</NavLink>)}</nav><span className="hidden pb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground sm:block">{state.operator || t('hud.unassigned')}</span></div></div></header>
    <div className="relative z-10"><Outlet/></div>
    <footer className="relative z-10 mt-12 border-t border-border"><div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-5 py-6 sm:px-9"><span className="font-mono text-[9px] uppercase tracking-[.2em] text-muted-foreground">{t('brand.name')} • A fictional story</span><div className="flex items-center gap-4"><span className="font-mono text-[9px] text-muted-foreground">{t('common.saved')}</span><button type="button" onClick={()=>{if(window.confirm('Reset all game progress?'))resetGame();}} className="inline-flex items-center gap-1 font-mono text-[9px] uppercase text-muted-foreground hover:text-primary"><RotateCcw className="h-3 w-3"/>Reset</button></div></div></footer><EvidencePanel open={evidenceOpen} onClose={()=>setEvidenceOpen(false)}/>
  </div>;
}

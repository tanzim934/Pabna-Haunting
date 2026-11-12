import { AnimatePresence, motion } from 'framer-motion';
import { X, Fingerprint } from 'lucide-react';
import { EVIDENCE, collectedCode, useHaunting } from '@/lib/haunting';
import { translate, tx } from '@/lib/i18n';
export default function EvidencePanel({ open, onClose }) {
  const state = useHaunting();
  const t = (key, vars) => translate(state.lang, key, vars);
  const found = EVIDENCE.filter(e => state.reveals[e.key]).length;
  return <AnimatePresence>{open && <>
    <motion.button aria-label="Close evidence panel" type="button" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose} className="fixed inset-0 z-[70] cursor-default bg-black/70 backdrop-blur-sm" />
    <motion.aside aria-label={t('nav.evidence')} role="dialog" aria-modal="true" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{duration:.3}} className="fixed inset-y-0 right-0 z-[71] flex w-full max-w-[420px] flex-col border-l border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-6 py-5"><div className="flex items-center gap-3"><Fingerprint className="h-5 w-5 text-primary"/><span className="font-mono text-xs uppercase tracking-[.24em]">{t('nav.evidence')}</span></div><button type="button" onClick={onClose} aria-label="Close"><X className="h-5 w-5" /></button></div>
      <div className="flex-1 overflow-y-auto px-6 py-6"><p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">{found} {t('common.of')} {EVIDENCE.length} RECOVERED</p>
        <div className="mb-7 flex gap-2">{EVIDENCE.map(e => <span key={e.key} className={`flex h-12 flex-1 items-center justify-center border font-mono text-xl ${state.reveals[e.key] ? 'border-primary/60 bg-primary/10' : 'border-border text-muted-foreground'}`}>{state.reveals[e.key] ? e.digit : '·'}</span>)}</div>
        <div className="mb-7 border border-border bg-background/80 p-4"><p className="mb-2 font-mono text-[9px] uppercase tracking-[.2em] text-muted-foreground">{t('lockdown.code.title')}</p><p className="font-mono text-2xl tracking-[.35em]">{collectedCode(state.reveals)}</p></div>
        <ul className="space-y-2">{EVIDENCE.map(e => <li key={e.key} className="flex items-center justify-between gap-4 border border-border px-3 py-3 text-xs"><span className={state.reveals[e.key] ? '' : 'text-muted-foreground'}>{String(e.slot).padStart(2,'0')} · {tx(e, state.lang)}</span><span className="font-mono text-primary">{state.reveals[e.key] ? e.digit : '—'}</span></li>)}</ul>
      </div><p className="border-t border-border px-6 py-4 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{t('common.saved')}</p>
    </motion.aside>
  </>}</AnimatePresence>;
}

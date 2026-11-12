import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Moon, ScanLine } from 'lucide-react';
import { reveal, useHaunting, EVIDENCE } from '@/lib/haunting';
import { translate, tx } from '@/lib/i18n';
import { sound } from '@/lib/audio';

function meets(condition, { exposure, distortion, nightVision }) {
  if (!condition) return false;
  if (condition.type === 'exposure') return exposure >= condition.value;
  if (condition.type === 'distortion') return distortion >= condition.value;
  if (condition.type === 'nightVision') return nightVision;
  return false;
}

export default function CameraFeed({ camera, index }) {
  const state = useHaunting();
  const lang = state.lang;
  const t = key => translate(lang, key);
  const [exposure, setExposure] = useState(35);
  const [distortion, setDistortion] = useState(12);
  const [gain, setGain] = useState(28);
  const [nightVision, setNightVision] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const [tamper, setTamper] = useState(0);
  const unlocked = camera.condition ? meets(camera.condition, { exposure, distortion, nightVision }) : false;
  const captured = camera.reveal ? Boolean(state.reveals[camera.reveal]) : false;
  const digit = EVIDENCE.find(e => e.key === camera.reveal)?.digit || '';

  useEffect(() => {
    if (camera.reveal && unlocked && !captured) { reveal(camera.reveal); sound.success(); }
  }, [camera.reveal, captured, unlocked]);

  const triggerGlitch = () => {
    sound.glitch(); setGlitching(true); setTamper(n => n + 1);
    window.setTimeout(() => setGlitching(false), 720);
  };
  const showHint = tamper >= 3 && camera.condition && !unlocked;
  const hint = camera.condition?.type === 'exposure'
    ? `${t('surveillance.exposure')} ≥ ${camera.condition.value}`
    : camera.condition?.type === 'distortion'
      ? `${t('surveillance.distortion')} ≥ ${camera.condition.value}`
      : `${t('surveillance.night')} · ON`;

  return <motion.article initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: (index % 3) * .04 }}
    className={`overflow-hidden rounded-sm border bg-card/60 ${captured ? 'border-accent/50' : 'border-border'}`}>
    <div className={`relative aspect-video overflow-hidden ${glitching ? 'hn-glitching' : ''}`}
      style={{ background: `radial-gradient(70% 85% at 50% 35%, rgba(${nightVision ? '90,220,140' : '130,120,120'}, ${0.06 + exposure / 420}) 0%, #05080a 77%)` }}>
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent 0 32px, rgba(250,250,250,.04) 32px 34px)' }} />
      <div className="absolute bottom-0 h-[35%] w-full bg-gradient-to-t from-black to-transparent" />
      {camera.reveal ? captured ? <motion.span initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }}
        className="absolute inset-0 flex items-center justify-center font-display text-7xl font-light"
        style={{ color: nightVision ? '#a9f5c4' : '#f3e3d7', textShadow: '0 0 50px rgba(180,240,180,.42)', filter: `blur(${Math.max(0, (60 - distortion) / 30)}px)` }}>{digit}</motion.span>
        : <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] uppercase tracking-[.27em] text-foreground/35">{t('surveillance.withheld')}</span>
        : <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] uppercase tracking-[.27em] text-foreground/25">{t('surveillance.plain')}</span>}
      <div className="pointer-events-none absolute inset-0 hn-noise mix-blend-screen" style={{ opacity: .12 + gain / 400 }} />
      <div className="pointer-events-none absolute inset-0 hn-scanlines opacity-50" />
      {nightVision && <div className="pointer-events-none absolute inset-0 bg-accent/15 mix-blend-color" />}
      <div className="absolute inset-x-0 top-0 flex justify-between p-3 font-mono text-[9px] tracking-[.18em] text-foreground/70"><span className="flex items-center gap-2"><span className={`h-1.5 w-1.5 rounded-full ${captured ? 'bg-accent' : 'bg-primary'} hn-blink`} />{camera.id}</span><span>REC 03:12:{String(index + 1).padStart(2, '0')}</span></div>
      <div className="absolute inset-x-0 bottom-0 flex justify-between p-3 font-mono text-[8px] uppercase tracking-[.2em] text-foreground/65"><span>{t('surveillance.live')}</span><span>{tamper ? translate(lang, 'surveillance.tamper', { n: tamper }) : <ScanLine className="h-3 w-3" />}</span></div>
    </div>
    <div className="space-y-3 border-t border-border/70 p-4">
      <p className="text-[12px] text-foreground/90">{tx(camera.room, lang)}</p>
      <p className="min-h-[2.8rem] text-[11px] leading-relaxed text-muted-foreground">{tx(camera.note, lang)}</p>
      <div className="flex items-center justify-between gap-2"><span className="font-mono text-[9px] uppercase tracking-[.14em] text-primary/80">{captured ? t('surveillance.recovered') : t('surveillance.withheld')}</span><div className="flex gap-2">
        <button type="button" onClick={() => { setNightVision(v => !v); sound.click(); }} aria-pressed={nightVision} className={`tiny-button ${nightVision ? 'active' : ''}`}><Moon className="h-3 w-3" />{t('surveillance.night')}</button>
        <button type="button" onClick={triggerGlitch} className="tiny-button"><Zap className="h-3 w-3" />{t('surveillance.glitch')}</button>
      </div></div>
      {[{ label: t('surveillance.exposure'), value: exposure, set: setExposure }, { label: t('surveillance.distortion'), value: distortion, set: setDistortion }, { label: t('surveillance.gain'), value: gain, set: setGain }].map(s =>
        <label key={s.label} className="block"><span className="mb-1 flex justify-between font-mono text-[9px] uppercase tracking-[.16em] text-muted-foreground">{s.label}<span className="text-foreground/70">{s.value}</span></span><input aria-label={s.label} className="signal-range w-full" type="range" min="0" max="100" value={s.value} onChange={e => s.set(Number(e.target.value))}/></label>)}
      {showHint && <p className="border border-dashed border-primary/50 p-2 font-mono text-[9px] tracking-widest text-primary">SIGNAL HINT · {hint}</p>}
    </div>
  </motion.article>;
}

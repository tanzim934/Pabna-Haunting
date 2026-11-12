import { useState } from 'react';
import { WIRES, TERMINALS } from '@/lib/haunting';
import { translate } from '@/lib/i18n';
import { sound } from '@/lib/audio';
const rowY = i => 16 + i * 62;
export default function WireGame({ lang, onWrong, onComplete }) {
  const [links, setLinks] = useState([]);
  const [selected, setSelected] = useState(null);
  const t = (key, vars) => translate(lang, key, vars);
  const playMorse = pattern => [...pattern].forEach((symbol,i) => window.setTimeout(() => sound.beep(symbol === '.' ? 'short' : 'long'), 120+i*230));
  const pickWire = wire => { if (links.some(link => link.wire === wire.id)) return; setSelected(wire.id); playMorse(wire.morse); };
  const pickTerminal = id => {
    if (!selected || links.some(link => link.terminal === id)) return;
    const wire = WIRES.find(w => w.id === selected), terminal = TERMINALS.find(t => t.id === id);
    if (!wire || !terminal) return;
    if (wire.letter !== terminal.letter) { setSelected(null); sound.error(); onWrong(); return; }
    const next = [...links, { wire:wire.id, terminal:id, y1:rowY(WIRES.indexOf(wire)), y2:rowY(TERMINALS.indexOf(terminal)) }];
    setLinks(next); setSelected(null); sound.beep('short');
    if (next.length === WIRES.length) { sound.success(); onComplete(); }
  };
  const active = WIRES.find(w => w.id === selected);
  return <div><p className="mb-4 flex justify-between gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><span>{active ? t('lockdown.wires.selected',{morse:active.morse}) : t('lockdown.wires.hint')}</span><span>{links.length}/{WIRES.length}</span></p>
    <svg viewBox="0 0 340 268" className="w-full select-none" role="group" aria-label={t('lockdown.wires.title')}>
      {links.map(link => <g key={link.wire}><path d={`M136,${link.y1+22} C170,${link.y1+22} 172,${link.y2+22} 204,${link.y2+22}`} fill="none" stroke="hsl(var(--accent))" strokeWidth="2"/><circle cx="136" cy={link.y1+22} r="2" fill="hsl(var(--accent))"/><circle cx="204" cy={link.y2+22} r="2" fill="hsl(var(--accent))"/></g>)}
      {WIRES.map((wire,i) => links.some(l=>l.wire===wire.id) ? null : <g key={wire.id} role="button" tabIndex="0" aria-label={`Select Morse ${wire.morse}`} onClick={()=>pickWire(wire)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pickWire(wire);}}} className="cursor-pointer"><rect x="4" y={rowY(i)} width="130" height="44" rx="2" fill={selected===wire.id ? 'hsl(var(--primary) / .18)' : 'hsl(var(--foreground) / .04)'} stroke={selected===wire.id ? 'hsl(var(--primary))' : 'hsl(var(--foreground) / .2)'} /><text x="18" y={rowY(i)+25} fontSize="15" letterSpacing="4" fill="hsl(var(--foreground))">{wire.morse}</text><text x="18" y={rowY(i)+37} fontSize="7" fill="hsl(var(--muted-foreground))">WIRE {i+1}</text></g>)}
      {TERMINALS.map((terminal,i) => <g key={terminal.id} role="button" tabIndex="0" aria-label={`Connect terminal ${terminal.letter}`} onClick={()=>pickTerminal(terminal.id)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pickTerminal(terminal.id);}}} className="cursor-pointer"><rect x="206" y={rowY(i)} width="130" height="44" rx="2" fill={links.some(l=>l.terminal===terminal.id)?'hsl(var(--accent) / .13)':'hsl(var(--foreground) / .04)'} stroke={links.some(l=>l.terminal===terminal.id)?'hsl(var(--accent))':'hsl(var(--foreground) / .2)'}/><text x="220" y={rowY(i)+28} fontSize="19" fill="hsl(var(--foreground))">{terminal.letter}</text><text x="329" y={rowY(i)+28} fontSize="7" textAnchor="end" fill="hsl(var(--muted-foreground))">PORT {i+1}</text></g>)}
    </svg>
  </div>;
}

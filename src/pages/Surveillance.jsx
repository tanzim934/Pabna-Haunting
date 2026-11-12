import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Wifi, Eye } from 'lucide-react';
import CameraFeed from '@/components/CameraFeed';
import ClearanceGate from '@/components/ClearanceGate';
import { CAMERAS, useHaunting, EVIDENCE } from '@/lib/haunting';
export default function Surveillance() {
  const state=useHaunting(); const bn=state.lang==='bn';
  if (!state.clearance) return <ClearanceGate title="NODE 02 / SEALED" sub="Gateway clearance required" requirements={{heading:'ENTRY CONDITIONS',items:[{label:'Verify your clearance passcode in Gateway',met:false}]}}/>;
  const found=EVIDENCE.slice(0,3).filter(e=>state.reveals[e.key]).length;
  return <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-9 sm:py-16"><div className="mb-9 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow mb-4"><Wifi className="h-4 w-4"/>NODE 02 / LIVE MONITORING</p><h1 className="font-display text-6xl font-light sm:text-7xl">{bn?'নজরদারি গ্রিড':'Surveillance grid'}</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{bn?'ছয়টি সিমুলেটেড ক্যামেরা। এক্সপোজার, ডিস্টরশন ও নাইট ভিশন ব্যবহার করে তিনটি লুকানো সংখ্যা বের করুন।':'Six simulated feeds. Adjust exposure, distortion and night vision to discover three hidden numbers. Trigger GLITCH three times on a feed to uncover a hint.'}</p></div><div className="border border-border bg-card p-4 font-mono text-xs"><span className="mb-2 flex items-center gap-2 text-muted-foreground"><Activity className="h-4 w-4 text-primary"/> SIGNAL HEALTH</span><strong className="text-xl text-accent">{found}/3</strong><p className="mt-1 text-[9px] text-muted-foreground">CAMERA FRAGMENTS FOUND</p></div></div>
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border border-primary/25 bg-primary/5 px-5 py-4"><p className="font-mono text-[11px] uppercase tracking-wider text-foreground/85">● 3 CAMERAS CONTAIN HIDDEN TRANSMISSIONS</p><p className="font-mono text-[10px] text-muted-foreground">SEQUENCE: WARD → STAIRWELL → CELLAR</p></div>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{CAMERAS.map((camera,i)=><CameraFeed key={camera.id} camera={camera} index={i}/>)}</div>
    <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border border-border bg-card/60 p-6"><div><div className="mb-2 flex items-center gap-2 font-mono text-[10px] tracking-widest text-accent"><Eye className="h-4 w-4"/>{found===3?'ALL SURVEILLANCE EVIDENCE RECOVERED':'EVIDENCE PARTIALLY RECOVERED'}</div><h2 className="font-display text-3xl">{bn?'রোগীর আর্কাইভ অপেক্ষা করছে':'The patient archive awaits.'}</h2><p className="mt-2 text-xs text-muted-foreground">{found===3?'Next node unlocked.':'Recover all three camera fragments to unlock the next node.'}</p></div><Link to="/archive" className={`primary-action ${found!==3?'pointer-events-none opacity-40':''}`} aria-disabled={found!==3}>ENTER ARCHIVE <ArrowRight className="h-4 w-4"/></Link></div>
  </div>;
}

import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
export default function ScrollToTop() { const {pathname,hash}=useLocation(); const type=useNavigationType(); useEffect(()=>{if(type==='POP')return;if(hash){const id=decodeURIComponent(hash.slice(1));const h=window.setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}),50);return()=>window.clearTimeout(h);}window.scrollTo({top:0,left:0,behavior:'instant'});},[pathname,hash,type]);return null; }

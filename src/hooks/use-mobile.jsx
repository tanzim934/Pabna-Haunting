import * as React from 'react';
const MOBILE_BREAKPOINT=768;
export function useIsMobile(){const [isMobile,setIsMobile]=React.useState(false);
 React.useEffect(()=>{const m=window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT-1}px)`);const listener=()=>setIsMobile(window.innerWidth<MOBILE_BREAKPOINT);listener();m.addEventListener('change',listener);return()=>m.removeEventListener('change',listener);},[]);
 return isMobile;
}

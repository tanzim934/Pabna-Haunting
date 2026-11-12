import * as React from 'react';import * as R from 'recharts';import {cn} from '@/lib/utils';
const Context=React.createContext({});export function useChart(){return React.useContext(Context)};
export const ChartContainer=React.forwardRef(({config={},className,children,...props},ref)=><Context.Provider value={{config}}><div ref={ref} className={cn('flex aspect-video justify-center text-xs',className)} {...props}><R.ResponsiveContainer width="100%" height="100%">{children}</R.ResponsiveContainer></div></Context.Provider>);
export const ChartStyle=()=>null;export const ChartTooltip=R.Tooltip;export const ChartLegend=R.Legend;
export const ChartTooltipContent=React.forwardRef(({active,payload,label,className},ref)=>active&&payload?.length?<div ref={ref} className={cn('rounded border border-border bg-background p-3 text-xs',className)}>{label&&<div className="font-bold">{label}</div>}{payload.map((x,i)=><div key={i}>{x.name}: {x.value}</div>)}</div>:null);
export const ChartLegendContent=React.forwardRef(({payload,className},ref)=><div ref={ref} className={cn('flex justify-center gap-3',className)}>{payload?.map((x,i)=><span key={i}>{x.value}</span>)}</div>);

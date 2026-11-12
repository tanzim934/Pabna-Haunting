import * as React from 'react';import {cn} from '@/lib/utils';
const make=(tag,base,name)=>{const C=React.forwardRef(({className,...props},ref)=>React.createElement(tag,{ref,className:cn(base,className),...props}));C.displayName=name;return C;};
export const Card=make('div','rounded-xl border border-border bg-card text-card-foreground shadow','Card');
export const CardHeader=make('div','flex flex-col space-y-1.5 p-6','CardHeader');
export const CardTitle=make('div','font-semibold leading-none tracking-tight','CardTitle');
export const CardDescription=make('div','text-sm text-muted-foreground','CardDescription');
export const CardContent=make('div','p-6 pt-0','CardContent');
export const CardFooter=make('div','flex items-center p-6 pt-0','CardFooter');

import * as P from 'vaul';
const Primitive=P.Drawer;

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Drawer=Primitive.Root;
export const DrawerTrigger=Primitive.Trigger;
export const DrawerPortal=Primitive.Portal;
export const DrawerOverlay=React.forwardRef(({className,...props},ref)=><Primitive.Overlay ref={ref} className={cn('text-sm',className)} {...props}/>);
export const DrawerClose=React.forwardRef(({className,...props},ref)=><Primitive.Close ref={ref} className={cn('text-sm',className)} {...props}/>);
export const DrawerContent=React.forwardRef(({className,...props},ref)=><Primitive.Portal><Primitive.Overlay className="fixed inset-0 z-50 bg-black/70"/><Primitive.Content ref={ref} className={cn('fixed inset-x-0 bottom-0 z-50 rounded-t-xl border bg-background p-6',className)} {...props}/></Primitive.Portal>);
export const DrawerHeader=React.forwardRef(({className,...props},ref)=><div ref={ref} className={cn('p-2',className)} {...props}/>);
export const DrawerFooter=React.forwardRef(({className,...props},ref)=><div ref={ref} className={cn('p-2',className)} {...props}/>);
export const DrawerTitle=React.forwardRef(({className,...props},ref)=><Primitive.Title ref={ref} className={cn('text-sm',className)} {...props}/>);
export const DrawerDescription=React.forwardRef(({className,...props},ref)=><Primitive.Description ref={ref} className={cn('text-sm',className)} {...props}/>);

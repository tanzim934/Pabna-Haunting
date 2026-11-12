import * as Primitive from '@radix-ui/react-dialog';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Dialog=Primitive.Root;
export const DialogTrigger=Primitive.Trigger;
export const DialogPortal=Primitive.Portal;
export const DialogOverlay=React.forwardRef(({className,...props},ref)=><Primitive.Overlay ref={ref} className={cn('text-sm',className)} {...props}/>);
export const DialogClose=React.forwardRef(({className,...props},ref)=><Primitive.Close ref={ref} className={cn('text-sm',className)} {...props}/>);
export const DialogContent=React.forwardRef(({className,...props},ref)=><Primitive.Portal><Primitive.Overlay className="fixed inset-0 z-50 bg-black/70"/><Primitive.Content ref={ref} className={cn('fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-background p-6',className)} {...props}/></Primitive.Portal>);
export const DialogHeader=React.forwardRef(({className,...props},ref)=><div ref={ref} className={cn('p-2',className)} {...props}/>);
export const DialogFooter=React.forwardRef(({className,...props},ref)=><div ref={ref} className={cn('p-2',className)} {...props}/>);
export const DialogTitle=React.forwardRef(({className,...props},ref)=><Primitive.Title ref={ref} className={cn('text-sm',className)} {...props}/>);
export const DialogDescription=React.forwardRef(({className,...props},ref)=><Primitive.Description ref={ref} className={cn('text-sm',className)} {...props}/>);

import * as Primitive from '@radix-ui/react-alert-dialog';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const AlertDialog=Primitive.Root;
export const AlertDialogTrigger=Primitive.Trigger;
export const AlertDialogPortal=Primitive.Portal;
export const AlertDialogOverlay=React.forwardRef(({className,...props},ref)=><Primitive.Overlay ref={ref} className={cn('text-sm',className)} {...props}/>);
export const AlertDialogContent=React.forwardRef(({className,...props},ref)=><Primitive.Portal><Primitive.Overlay className="fixed inset-0 z-50 bg-black/70"/><Primitive.Content ref={ref} className={cn('fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-background p-6',className)} {...props}/></Primitive.Portal>);
export const AlertDialogHeader=React.forwardRef(({className,...props},ref)=><div ref={ref} className={cn('p-2',className)} {...props}/>);
export const AlertDialogFooter=React.forwardRef(({className,...props},ref)=><div ref={ref} className={cn('p-2',className)} {...props}/>);
export const AlertDialogTitle=React.forwardRef(({className,...props},ref)=><Primitive.Title ref={ref} className={cn('text-sm',className)} {...props}/>);
export const AlertDialogDescription=React.forwardRef(({className,...props},ref)=><Primitive.Description ref={ref} className={cn('text-sm',className)} {...props}/>);
export const AlertDialogAction=Primitive.Action;
export const AlertDialogCancel=Primitive.Cancel;

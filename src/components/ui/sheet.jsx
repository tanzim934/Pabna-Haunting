import * as Primitive from '@radix-ui/react-dialog';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Sheet=Primitive.Root;
export const SheetTrigger=Primitive.Trigger;
export const SheetClose=React.forwardRef(({className,...props},ref)=><Primitive.Close ref={ref} className={cn('text-sm',className)} {...props}/>);
export const SheetPortal=Primitive.Portal;
export const SheetOverlay=React.forwardRef(({className,...props},ref)=><Primitive.Overlay ref={ref} className={cn('text-sm',className)} {...props}/>);
export const SheetContent=React.forwardRef(({className,side='right',...props},ref)=><Primitive.Portal><Primitive.Overlay className="fixed inset-0 z-50 bg-black/80"/><Primitive.Content ref={ref} className={cn('fixed inset-y-0 right-0 z-50 w-[85vw] max-w-sm border-l border-border bg-background p-6',className)} {...props}/></Primitive.Portal>);
export const SheetHeader=React.forwardRef(({className,...props},ref)=><div ref={ref} className={cn('p-2',className)} {...props}/>);
export const SheetFooter=React.forwardRef(({className,...props},ref)=><div ref={ref} className={cn('p-2',className)} {...props}/>);
export const SheetTitle=React.forwardRef(({className,...props},ref)=><Primitive.Title ref={ref} className={cn('text-sm',className)} {...props}/>);
export const SheetDescription=React.forwardRef(({className,...props},ref)=><Primitive.Description ref={ref} className={cn('text-sm',className)} {...props}/>);

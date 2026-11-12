import * as Primitive from '@radix-ui/react-toast';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const ToastProvider=Primitive.Provider;
export const ToastViewport=React.forwardRef(({className,...props},ref)=><Primitive.Viewport ref={ref} className={cn('text-sm',className)} {...props}/>);
export const Toast=Primitive.Root;
export const ToastTitle=React.forwardRef(({className,...props},ref)=><Primitive.Title ref={ref} className={cn('text-sm',className)} {...props}/>);
export const ToastDescription=React.forwardRef(({className,...props},ref)=><Primitive.Description ref={ref} className={cn('text-sm',className)} {...props}/>);
export const ToastClose=React.forwardRef(({className,...props},ref)=><Primitive.Close ref={ref} className={cn('text-sm',className)} {...props}/>);
export const ToastAction=Primitive.Action;

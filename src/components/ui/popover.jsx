import * as Primitive from '@radix-ui/react-popover';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Popover=Primitive.Root;
export const PopoverTrigger=Primitive.Trigger;
export const PopoverContent=React.forwardRef(({className,...props},ref)=><Primitive.Portal><Primitive.Content ref={ref} className={cn('z-50 rounded-md border border-border bg-popover p-4',className)} {...props}/></Primitive.Portal>);
export const PopoverAnchor=React.forwardRef(({className,...props},ref)=><Primitive.Anchor ref={ref} className={cn('text-sm',className)} {...props}/>);

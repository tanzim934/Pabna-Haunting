import * as Primitive from '@radix-ui/react-tooltip';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const TooltipProvider=Primitive.Provider;
export const Tooltip=Primitive.Root;
export const TooltipTrigger=Primitive.Trigger;
export const TooltipContent=React.forwardRef(({className,...props},ref)=><Primitive.Portal><Primitive.Content ref={ref} className={cn('z-50 border border-border bg-popover px-3 py-2 text-xs',className)} {...props}/></Primitive.Portal>);

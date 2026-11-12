import * as Primitive from '@radix-ui/react-collapsible';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Collapsible=Primitive.Root;
export const CollapsibleTrigger=Primitive.Trigger;
export const CollapsibleContent=React.forwardRef(({className,...props},ref)=><Primitive.Content ref={ref} className={cn('text-sm',className)} {...props}/>);

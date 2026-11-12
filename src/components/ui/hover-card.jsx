import * as Primitive from '@radix-ui/react-hover-card';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const HoverCard=Primitive.Root;
export const HoverCardTrigger=Primitive.Trigger;
export const HoverCardContent=React.forwardRef(({className,...props},ref)=><Primitive.Content ref={ref} className={cn('text-sm',className)} {...props}/>);

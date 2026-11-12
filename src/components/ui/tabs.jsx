import * as Primitive from '@radix-ui/react-tabs';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Tabs=Primitive.Root;
export const TabsList=React.forwardRef(({className,...props},ref)=><Primitive.List ref={ref} className={cn('text-sm',className)} {...props}/>);
export const TabsTrigger=Primitive.Trigger;
export const TabsContent=React.forwardRef(({className,...props},ref)=><Primitive.Content ref={ref} className={cn('text-sm',className)} {...props}/>);

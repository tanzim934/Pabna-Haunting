import * as Primitive from '@radix-ui/react-scroll-area';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const ScrollArea=Primitive.Root;
export const ScrollBar=React.forwardRef(({className,...props},ref)=><Primitive.Scrollbar ref={ref} className={cn('text-sm',className)} {...props}/>);

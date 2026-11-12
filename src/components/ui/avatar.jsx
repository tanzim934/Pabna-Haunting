import * as Primitive from '@radix-ui/react-avatar';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Avatar=Primitive.Root;
export const AvatarImage=React.forwardRef(({className,...props},ref)=><Primitive.Image ref={ref} className={cn('text-sm',className)} {...props}/>);
export const AvatarFallback=React.forwardRef(({className,...props},ref)=><Primitive.Fallback ref={ref} className={cn('text-sm',className)} {...props}/>);

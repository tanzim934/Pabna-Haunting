import * as Primitive from '@radix-ui/react-checkbox';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Checkbox=React.forwardRef(({className,...props},ref)=><Primitive.Root ref={ref} className={cn('peer h-4 w-4 rounded-sm border border-primary',className)} {...props}><Primitive.Indicator>✓</Primitive.Indicator></Primitive.Root>);

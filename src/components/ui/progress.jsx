import * as Primitive from '@radix-ui/react-progress';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Progress=React.forwardRef(({value,className,...props},ref)=><Primitive.Root ref={ref} className={cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20',className)} {...props}><Primitive.Indicator className="h-full bg-primary transition-all" style={{transform:`translateX(-${100-(value||0)}%)`,width:'100%'}} /></Primitive.Root>);

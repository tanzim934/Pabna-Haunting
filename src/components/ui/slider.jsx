import * as Primitive from '@radix-ui/react-slider';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Slider=React.forwardRef(({className,...props},ref)=><Primitive.Root ref={ref} className={cn('relative flex h-5 items-center',className)} {...props}><Primitive.Track className="relative h-2 w-full rounded-full bg-primary/20"><Primitive.Range className="absolute h-full bg-primary"/></Primitive.Track><Primitive.Thumb className="block h-4 w-4 rounded-full bg-foreground"/></Primitive.Root>);

import * as Primitive from '@radix-ui/react-select';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Select=Primitive.Root;
export const SelectGroup=Primitive.Group;
export const SelectValue=Primitive.Value;
export const SelectTrigger=Primitive.Trigger;
export const SelectContent=React.forwardRef(({className,...props},ref)=><Primitive.Content ref={ref} className={cn('text-sm',className)} {...props}/>);
export const SelectLabel=React.forwardRef(({className,...props},ref)=><Primitive.Label ref={ref} className={cn('text-sm',className)} {...props}/>);
export const SelectItem=React.forwardRef(({children,...props},ref)=><Primitive.Item ref={ref} {...props}><Primitive.ItemText>{children}</Primitive.ItemText></Primitive.Item>);
export const SelectSeparator=React.forwardRef(({className,...props},ref)=><Primitive.Separator ref={ref} className={cn('text-sm',className)} {...props}/>);
export const SelectScrollUpButton=React.forwardRef(({className,...props},ref)=><Primitive.ScrollUpButton ref={ref} className={cn('text-sm',className)} {...props}/>);
export const SelectScrollDownButton=React.forwardRef(({className,...props},ref)=><Primitive.ScrollDownButton ref={ref} className={cn('text-sm',className)} {...props}/>);

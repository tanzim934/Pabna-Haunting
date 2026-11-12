import * as Primitive from '@radix-ui/react-dropdown-menu';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const DropdownMenu=Primitive.Root;
export const DropdownMenuTrigger=Primitive.Trigger;
export const DropdownMenuContent=React.forwardRef(({className,...props},ref)=><Primitive.Content ref={ref} className={cn('text-sm',className)} {...props}/>);
export const DropdownMenuItem=Primitive.Item;
export const DropdownMenuCheckboxItem=Primitive.CheckboxItem;
export const DropdownMenuRadioItem=Primitive.RadioItem;
export const DropdownMenuLabel=React.forwardRef(({className,...props},ref)=><Primitive.Label ref={ref} className={cn('text-sm',className)} {...props}/>);
export const DropdownMenuSeparator=React.forwardRef(({className,...props},ref)=><Primitive.Separator ref={ref} className={cn('text-sm',className)} {...props}/>);
export const DropdownMenuShortcut=React.forwardRef(({className,...props},ref)=><span ref={ref} className={cn('p-2',className)} {...props}/>);
export const DropdownMenuGroup=Primitive.Group;
export const DropdownMenuPortal=Primitive.Portal;
export const DropdownMenuSub=Primitive.Sub;
export const DropdownMenuSubContent=React.forwardRef(({className,...props},ref)=><Primitive.SubContent ref={ref} className={cn('text-sm',className)} {...props}/>);
export const DropdownMenuSubTrigger=React.forwardRef(({className,...props},ref)=><Primitive.SubTrigger ref={ref} className={cn('text-sm',className)} {...props}/>);
export const DropdownMenuRadioGroup=Primitive.RadioGroup;

import * as Primitive from '@radix-ui/react-context-menu';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const ContextMenu=Primitive.Root;
export const ContextMenuTrigger=Primitive.Trigger;
export const ContextMenuContent=React.forwardRef(({className,...props},ref)=><Primitive.Content ref={ref} className={cn('text-sm',className)} {...props}/>);
export const ContextMenuItem=Primitive.Item;
export const ContextMenuCheckboxItem=Primitive.CheckboxItem;
export const ContextMenuRadioItem=Primitive.RadioItem;
export const ContextMenuLabel=React.forwardRef(({className,...props},ref)=><Primitive.Label ref={ref} className={cn('text-sm',className)} {...props}/>);
export const ContextMenuSeparator=React.forwardRef(({className,...props},ref)=><Primitive.Separator ref={ref} className={cn('text-sm',className)} {...props}/>);
export const ContextMenuShortcut=React.forwardRef(({className,...props},ref)=><span ref={ref} className={cn('p-2',className)} {...props}/>);
export const ContextMenuGroup=Primitive.Group;
export const ContextMenuPortal=Primitive.Portal;
export const ContextMenuSub=Primitive.Sub;
export const ContextMenuSubContent=React.forwardRef(({className,...props},ref)=><Primitive.SubContent ref={ref} className={cn('text-sm',className)} {...props}/>);
export const ContextMenuSubTrigger=React.forwardRef(({className,...props},ref)=><Primitive.SubTrigger ref={ref} className={cn('text-sm',className)} {...props}/>);
export const ContextMenuRadioGroup=Primitive.RadioGroup;

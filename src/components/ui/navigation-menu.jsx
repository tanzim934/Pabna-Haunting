import * as Primitive from '@radix-ui/react-navigation-menu';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const NavigationMenu=React.forwardRef((props,ref)=><Primitive.Root ref={ref} {...props}/>);
export const NavigationMenuList=React.forwardRef(({className,...props},ref)=><Primitive.List ref={ref} className={cn('text-sm',className)} {...props}/>);
export const NavigationMenuItem=Primitive.Item;
export const NavigationMenuContent=React.forwardRef(({className,...props},ref)=><Primitive.Content ref={ref} className={cn('text-sm',className)} {...props}/>);
export const NavigationMenuTrigger=Primitive.Trigger;
export const NavigationMenuLink=Primitive.Link;
export const NavigationMenuIndicator=Primitive.Indicator;
export const NavigationMenuViewport=React.forwardRef(({className,...props},ref)=><Primitive.Viewport ref={ref} className={cn('text-sm',className)} {...props}/>);
export const navigationMenuTriggerStyle=()=> 'px-4 py-2 text-sm hover:bg-accent/10';

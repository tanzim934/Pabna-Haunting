import * as Primitive from '@radix-ui/react-accordion';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const Accordion=Primitive.Root;
export const AccordionItem=Primitive.Item;
export const AccordionTrigger=React.forwardRef(({children,...props},ref)=><Primitive.Header><Primitive.Trigger ref={ref} {...props}>{children}</Primitive.Trigger></Primitive.Header>);
export const AccordionContent=React.forwardRef(({className,...props},ref)=><Primitive.Content ref={ref} className={cn('text-sm',className)} {...props}/>);

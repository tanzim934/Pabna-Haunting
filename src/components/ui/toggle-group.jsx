import * as Primitive from '@radix-ui/react-toggle-group';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const ToggleGroup=Primitive.Root;
export const ToggleGroupItem=React.forwardRef((props,ref)=><Primitive.Item ref={ref} {...props}/>);

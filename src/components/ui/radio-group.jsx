import * as Primitive from '@radix-ui/react-radio-group';

import * as React from 'react';
import {cn} from '@/lib/utils';
export const RadioGroup=Primitive.Root;
export const RadioGroupItem=React.forwardRef((props,ref)=><Primitive.Item ref={ref} {...props}><Primitive.Indicator>●</Primitive.Indicator></Primitive.Item>);

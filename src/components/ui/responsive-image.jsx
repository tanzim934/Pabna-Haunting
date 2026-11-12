import * as React from 'react';import {cn} from '@/lib/utils';
export const ResponsiveImage=React.forwardRef(({src,fittingType='fill',className,...props},ref)=><span className={cn('relative inline-block',className)}><img ref={ref} src={src} alt={props.alt||''} className="h-full w-full" style={{objectFit:fittingType==='fit'?'contain':'cover'}} {...props}/></span>);

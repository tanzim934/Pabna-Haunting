import * as React from 'react';import {cva} from 'class-variance-authority';import {cn} from '@/lib/utils';
export const alertVariants=cva('relative w-full rounded-lg border px-4 py-3 text-sm',{variants:{variant:{default:'bg-background text-foreground',destructive:'border-destructive text-destructive'}},defaultVariants:{variant:'default'}});
export const Alert=React.forwardRef(({className,variant,...props},ref)=><div ref={ref} role="alert" className={cn(alertVariants({variant}),className)} {...props}/>);Alert.displayName='Alert';
export const AlertTitle=React.forwardRef(({className,...props},ref)=><h5 ref={ref} className={cn('mb-1 font-medium leading-none',className)} {...props}/>);AlertTitle.displayName='AlertTitle';
export const AlertDescription=React.forwardRef(({className,...props},ref)=><div ref={ref} className={cn('text-sm',className)} {...props}/>);AlertDescription.displayName='AlertDescription';

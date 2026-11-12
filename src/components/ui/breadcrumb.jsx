import * as React from 'react';import {Slot} from '@radix-ui/react-slot';import {ChevronRight,MoreHorizontal} from 'lucide-react';import {cn} from '@/lib/utils';
export const Breadcrumb=React.forwardRef((props,ref)=><nav ref={ref} aria-label="breadcrumb" {...props}/>);
export const BreadcrumbList=React.forwardRef(({className,...props},ref)=><ol ref={ref} className={cn('flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground',className)} {...props}/>);
export const BreadcrumbItem=React.forwardRef(({className,...props},ref)=><li ref={ref} className={cn('inline-flex items-center gap-1.5',className)} {...props}/>);
export const BreadcrumbLink=React.forwardRef(({asChild,className,...props},ref)=>{const Comp=asChild?Slot:'a';return <Comp ref={ref} className={cn('hover:text-foreground',className)} {...props}/>});
export const BreadcrumbPage=React.forwardRef(({className,...props},ref)=><span ref={ref} role="link" aria-disabled="true" aria-current="page" className={cn('font-normal text-foreground',className)} {...props}/>);
export function BreadcrumbSeparator({children,...props}){return <li role="presentation" aria-hidden="true" {...props}>{children??<ChevronRight className="h-4 w-4"/>}</li>}
export function BreadcrumbEllipsis(props){return <span {...props}><MoreHorizontal className="h-4 w-4"/><span className="sr-only">More</span></span>}

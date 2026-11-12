import {ChevronLeft,ChevronRight,MoreHorizontal} from 'lucide-react';import {buttonVariants} from './button';import {cn} from '@/lib/utils';
export const Pagination=({className,...props})=><nav role="navigation" aria-label="pagination" className={cn('mx-auto flex w-full justify-center',className)} {...props}/>;
export const PaginationContent=({className,...props})=><ul className={cn('flex items-center gap-1',className)} {...props}/>;
export const PaginationItem=props=><li {...props}/>;
export const PaginationLink=({className,isActive,size='icon',...props})=><a aria-current={isActive?'page':undefined} className={cn(buttonVariants({variant:isActive?'outline':'ghost',size}),className)} {...props}/>;
export const PaginationPrevious=props=><PaginationLink size="default" aria-label="Previous page" {...props}><ChevronLeft className="h-4 w-4"/>Previous</PaginationLink>;
export const PaginationNext=props=><PaginationLink size="default" aria-label="Next page" {...props}>Next<ChevronRight className="h-4 w-4"/></PaginationLink>;
export const PaginationEllipsis=props=><span aria-hidden {...props}><MoreHorizontal className="h-4 w-4"/></span>;

import * as React from 'react';import {Command as Primitive} from 'cmdk';import {Search} from 'lucide-react';import {Dialog,DialogContent} from './dialog';import {cn} from '@/lib/utils';
export const Command=React.forwardRef(({className,...props},ref)=><Primitive ref={ref} className={cn('flex h-full flex-col rounded-md bg-popover text-popover-foreground',className)} {...props}/>);
export function CommandDialog({children,...props}){return <Dialog {...props}><DialogContent><Command>{children}</Command></DialogContent></Dialog>}
export const CommandInput=React.forwardRef(({className,...props},ref)=><div className="flex items-center border-b px-3"><Search className="mr-2 h-4 w-4"/><Primitive.Input ref={ref} className={cn('h-10 w-full bg-transparent text-sm outline-none',className)} {...props}/></div>);
export const CommandList=React.forwardRef(({className,...props},ref)=><Primitive.List ref={ref} className={cn('max-h-72 overflow-y-auto',className)} {...props}/>);
export const CommandEmpty=React.forwardRef((props,ref)=><Primitive.Empty ref={ref} className="p-4 text-center text-sm" {...props}/>);
export const CommandGroup=React.forwardRef((props,ref)=><Primitive.Group ref={ref} {...props}/>);
export const CommandSeparator=React.forwardRef((props,ref)=><Primitive.Separator ref={ref} {...props}/>);
export const CommandItem=React.forwardRef(({className,...props},ref)=><Primitive.Item ref={ref} className={cn('cursor-pointer rounded px-2 py-2 text-sm data-[selected=true]:bg-accent/20',className)} {...props}/>);
export const CommandShortcut=props=><span className="ml-auto text-xs text-muted-foreground" {...props}/>;

import * as R from 'react-resizable-panels';import {GripVertical} from 'lucide-react';import {cn} from '@/lib/utils';
export function ResizablePanelGroup({className,...props}){return <R.PanelGroup className={cn('flex h-full w-full',className)} {...props}/>}
export const ResizablePanel=R.Panel;export function ResizableHandle({withHandle,className,...props}){return <R.PanelResizeHandle className={cn('relative flex w-px items-center justify-center bg-border',className)} {...props}>{withHandle&&<GripVertical className="h-4 w-3"/>}</R.PanelResizeHandle>}

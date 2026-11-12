import {toast as sonnerToast} from 'sonner';
export const toast=(props)=>{const id=sonnerToast(props.title||props.description||'Notice',{description:props.description});return {id,dismiss:()=>sonnerToast.dismiss(id),update:()=>{}}};
export function useToast(){return {toasts:[],toast,dismiss:sonnerToast.dismiss};}

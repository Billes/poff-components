import { ReactNode } from 'react';
interface UseSlotHookOptions {
    children: ReactNode | Array<ReactNode>;
    name: string;
    fallback?: ReactNode;
}
declare const useSlot: (options: UseSlotHookOptions) => any;
export default useSlot;

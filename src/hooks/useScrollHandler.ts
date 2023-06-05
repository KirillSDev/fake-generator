import { useEffect } from 'react';

export const useScrollHandler = (ref: React.RefObject<HTMLTableSectionElement>, handleScroll: () => void) => {
    useEffect(() => {
        ref.current?.addEventListener('scroll', handleScroll);
        return () => {
            ref.current?.removeEventListener('scroll', handleScroll);
        };
    }, [ref, handleScroll]);
};

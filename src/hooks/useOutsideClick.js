import { useEffect, useRef } from 'react';

export const useOutsideClick = (handler, listenCapuring = true) => {
    const ref = useRef();

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                handler();
            }
        };

        window.addEventListener('click', handleClick, listenCapuring);

        return () => window.removeEventListener('click', handleClick, listenCapuring);
    }, [handler, listenCapuring]);

    return ref;
};

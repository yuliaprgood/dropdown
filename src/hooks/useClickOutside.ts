import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;
type Handler = (event: Event) => void;

export const useClickOutside = (
    ref: RefObject<HTMLElement>,
    handler: Handler,
    capture = true,
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener, {
            capture,
        });
        document.addEventListener('touchstart', listener, {
            capture,
        });
        return () => {
            document.removeEventListener('mousedown', listener, {
                capture,
            });
            document.removeEventListener('touchstart', listener, {
                capture,
            });
        };
    }, [ref, handler, capture]);
};

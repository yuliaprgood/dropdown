import React, { useEffect } from 'react';

export const useMeasure = (catchResize = false) => {
    const ref = React.useRef<any>(null);
    const [bounds, set] = React.useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    });
    const [ro] = React.useState(
        () =>
            new ResizeObserver(([entry]) =>
                set(entry.target.getBoundingClientRect()),
            ),
    );

    useEffect(() => {
        if (catchResize) {
            const handleResize = () => {
                const rect = ref?.current?.getBoundingClientRect();
                if (rect) {
                    set(rect);
                }
            };

            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
                window.addEventListener('scroll', handleResize);
            };
        }
    }, [catchResize]);

    React.useLayoutEffect(() => {
        const el = ref.current;

        if (el) {
            ro.observe(el);
            return () => ro.unobserve(el);
        }
    }, [ro, ref.current]);

    return [ref, bounds] as [React.RefObject<any>, typeof bounds];
};

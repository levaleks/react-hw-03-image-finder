import { useState } from 'react';

export type UseModal = { isShowing: boolean; toggle: () => void };

export const useModal = (): UseModal => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = (): void => {
        setIsShowing(!isShowing);
    };

    return {
        isShowing,
        toggle,
    };
};

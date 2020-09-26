import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SModal, SOverlay } from './Modal.sc';

export type ModalProps = {
    isShowing: boolean;
    hide: () => void;
};

export const Modal: React.FC<ModalProps> = ({ isShowing, hide, children }) => {
    const handleClickModalBody = (e): void => {
        e.stopPropagation();
    };

    useEffect(() => {
        const handler = (event): void => {
            if (event.key === 'Escape') hide();
        };

        window.addEventListener('keydown', handler);

        return (): void => {
            window.removeEventListener('keydown', handler);
        };
    }, [hide]);

    return isShowing
        ? createPortal(
              <SOverlay onClick={hide}>
                  <SModal onClick={handleClickModalBody}>{children}</SModal>
              </SOverlay>,
              document.body,
          )
        : null;
};

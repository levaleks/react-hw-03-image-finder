import React, { useEffect, useRef, useState } from 'react';
import { SImageGalleryItem, SImageGalleryItemImage } from './ImageGalleryItem.sc';
import { useModal } from '../../Modal/useModal';
import { Modal } from '../../Modal';
import { Loader } from '../../Loader';

export type ImageGalleryItem = {
    id: number;
    previewImgUrl: string;
    largeImgUrl: string;
    getRef?: (ref) => void;
};

export const ImageGalleryItem: React.FC<ImageGalleryItem> = ({ id, previewImgUrl, largeImgUrl, getRef }) => {
    const { isShowing, toggle } = useModal();
    const [isLoaded, setIsLoaded] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        if (getRef) {
            getRef(itemRef);
        }
    }, [getRef]);

    return (
        <>
            <SImageGalleryItem ref={itemRef}>
                <SImageGalleryItemImage src={previewImgUrl} alt={String(id)} onClick={toggle} />
            </SImageGalleryItem>
            <Modal isShowing={isShowing} hide={toggle}>
                <img src={largeImgUrl} alt={String(id)} onLoad={(): void => setIsLoaded(true)} />
                {!isLoaded && <Loader />}
            </Modal>
        </>
    );
};

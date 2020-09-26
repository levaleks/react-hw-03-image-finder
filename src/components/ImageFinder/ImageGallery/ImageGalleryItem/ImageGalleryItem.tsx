import React, { useState } from 'react';
import { SImageGalleryItem, SImageGalleryItemImage } from './ImageGalleryItem.sc';
import { useModal } from '../../Modal/useModal';
import { Modal } from '../../Modal';
import { Loader } from '../../Loader';

export type ImageGalleryItem = {
    id: number;
    previewImgUrl: string;
    largeImgUrl: string;
};

export const ImageGalleryItem: React.FC<ImageGalleryItem> = ({ id, previewImgUrl, largeImgUrl }) => {
    const { isShowing, toggle } = useModal();
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <SImageGalleryItem>
                <SImageGalleryItemImage src={previewImgUrl} alt={String(id)} onClick={toggle} />
            </SImageGalleryItem>
            <Modal isShowing={isShowing} hide={toggle}>
                <img src={largeImgUrl} alt={String(id)} onLoad={(): void => setIsLoaded(true)} />
                {!isLoaded && <Loader />}
            </Modal>
        </>
    );
};

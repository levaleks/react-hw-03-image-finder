import React from 'react';
import { SImageGallery } from './ImageGallery.sc';
import { PixabeySearchResponseHitLight } from '../_core/imageFinderReducer';
import { ImageGalleryItem } from './ImageGalleryItem';

export type ImageGalleryProps = {
    images: PixabeySearchResponseHitLight[];
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    return (
        <SImageGallery>
            {images.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem key={id} id={id} previewImgUrl={webformatURL} largeImgUrl={largeImageURL} />
            ))}
        </SImageGallery>
    );
};

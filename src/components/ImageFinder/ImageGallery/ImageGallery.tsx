import React, { useMemo } from 'react';
import { chunk } from 'lodash';
import { SImageGallery } from './ImageGallery.sc';
import { PixabeySearchResponseHitLight } from '../_core/imageFinderReducer';
import { ImageGalleryItem } from './ImageGalleryItem';

export type ImageGalleryProps = {
    images: PixabeySearchResponseHitLight[];
    perPage?: number;
    onItemRef?: (ref) => void;
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, perPage = 20, onItemRef }) => {
    const items = useMemo(() => {
        const chunks = chunk(images, perPage);

        const firstItemIndexOnLastPage = chunks.length * perPage - perPage;

        return images.map(({ id, webformatURL, largeImageURL }, i) => (
            <ImageGalleryItem
                key={id}
                id={id}
                previewImgUrl={webformatURL}
                largeImgUrl={largeImageURL}
                getRef={i === firstItemIndexOnLastPage ? onItemRef : undefined}
            />
        ));
    }, [images, onItemRef, perPage]);

    return <SImageGallery>{items}</SImageGallery>;
};

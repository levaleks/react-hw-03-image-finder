import React, { useCallback, useEffect, useReducer } from 'react';
import { pixabeyAPI } from './_core/pixabey-api/PixabeyAPI';
import { SImageFinder } from './ImageFinder.sc';
import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { ImageFinderActions, imageFinderInitialState, imageFinderReducer } from './_core/imageFinderReducer';
import { Loader } from './Loader';
import { SEARCH_BAR_MIN_HEIGHT } from './SearchBar/SearchBar.sc';

export const ImageFinder: React.FC = () => {
    const [{ isLoading, query, hits }, dispatch] = useReducer(imageFinderReducer, imageFinderInitialState);

    const handleSearch = (q: string): void => {
        dispatch({ type: ImageFinderActions.SET_QUERY, payload: { query: { q } } });
    };

    const handleLoadMore = useCallback(() => {
        const nextPage = String(Number(query.page) + 1);

        dispatch({ type: ImageFinderActions.UPDATE_QUERY, payload: { query: { page: nextPage } } });
    }, [query.page]);

    useEffect(() => {
        const findImages = async () => {
            const { hits: res } = await pixabeyAPI.findImages(query);

            dispatch({ type: ImageFinderActions.UPDATE_HITS, payload: { hits: res || [] } });
        };

        if (query.q) {
            findImages();
        }
    }, [query]);

    const getRef = useCallback((ref): void => {
        window.scrollTo({
            top: ref.current.offsetTop - Number.parseInt(SEARCH_BAR_MIN_HEIGHT, 10) - 20,
            behavior: 'smooth',
        });
    }, []);

    return (
        <SImageFinder isFullHeight={!query.q && !hits.length}>
            <SearchBar onSearch={handleSearch} isFullHeight={!query.q && !hits.length} />
            <ImageGallery images={hits} perPage={query.per_page} onItemRef={getRef} />
            {isLoading && <Loader />}
            {Boolean(!isLoading && hits.length) && <Button onClick={handleLoadMore}>Load more</Button>}
        </SImageFinder>
    );
};

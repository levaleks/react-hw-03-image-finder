import { produce } from 'immer';
import { PixabeySearchParameters } from './pixabey-api/abstracts/PixabeySearchParameters';
import { PixabeySearchResponseHit } from './pixabey-api/abstracts/PixabeySearchResponse';

export type PixabeySearchResponseHitLight = Pick<PixabeySearchResponseHit, 'id' | 'webformatURL' | 'largeImageURL'>;

export type ImageFinderState = {
    query: PixabeySearchParameters;
    hits: PixabeySearchResponseHitLight[];
    isLoading: boolean;
};

export const imageFinderInitialState: ImageFinderState = {
    query: {
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        page: '1',
        per_page: 15,
    },
    hits: [],
    isLoading: false,
};

export enum ImageFinderActions {
    SET_QUERY = 'SET_QUERY',
    UPDATE_QUERY = 'UPDATE_QUERY',
    UPDATE_HITS = 'UPDATE_HITS',
}

export type SetQueryAction = {
    type: ImageFinderActions.SET_QUERY;
    payload: {
        query: PixabeySearchParameters;
    };
};

export type UpdateQueryAction = {
    type: ImageFinderActions.UPDATE_QUERY;
    payload: {
        query: PixabeySearchParameters;
    };
};

export type UpdateHitsAction = {
    type: ImageFinderActions.UPDATE_HITS;
    payload: {
        hits: PixabeySearchResponseHitLight[];
    };
};

export type ImageFinderActionTypes = SetQueryAction | UpdateQueryAction | UpdateHitsAction;

export const imageFinderReducer = (state: ImageFinderState, action: ImageFinderActionTypes): ImageFinderState => {
    switch (action.type) {
        case ImageFinderActions.SET_QUERY:
            return produce(imageFinderInitialState, (draft) => {
                if (action.payload.query.q) {
                    draft.isLoading = true;
                }

                Object.assign(draft.query, action.payload.query);
            });
        case ImageFinderActions.UPDATE_QUERY:
            return produce(state, (draft) => {
                draft.isLoading = true;
                Object.assign(draft.query, action.payload.query);
            });
        case ImageFinderActions.UPDATE_HITS:
            return produce(state, (draft) => {
                draft.isLoading = false;
                draft.hits.push(...action.payload.hits);
            });
        default:
            return state;
    }
};

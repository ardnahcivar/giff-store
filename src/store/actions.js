import { 
    GIFF_FETCH_REQUESTED,
    GIFF_FETCH_NEXT_PAGE_REQUEST,
    GIFF_SEARCH_REQUEST
} from './action-types';

export const loadGiff = () => ({ type: GIFF_FETCH_REQUESTED });
export const loadNextPageGiffs = (payload) => ({ type: GIFF_FETCH_NEXT_PAGE_REQUEST, payload })
export const loadSearchedGiffs = (payload) => ({ type: GIFF_SEARCH_REQUEST, payload });
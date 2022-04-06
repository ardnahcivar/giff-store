import { 
    GIFF_FETCH_REQUEST,
    GIFF_FETCH_NEXT_PAGE_REQUEST,
    GIFF_SEARCH_REQUEST,
    GIFF_SEARCH_CLEAR,
    THEME_TOGGLE,
    RESET_GIFF_DATA
} from './action-types';

export const loadGiff = () => ({ type: GIFF_FETCH_REQUEST });
export const loadNextPageGiffs = (payload) => ({ type: GIFF_FETCH_NEXT_PAGE_REQUEST, payload })
export const loadSearchedGiffs = (payload) => ({ type: GIFF_SEARCH_REQUEST, payload });
export const clearSearch = () => ({ type: GIFF_SEARCH_CLEAR });
export const toggleTheme = () => ({ type: THEME_TOGGLE });
export const resetGiffData = () => ({ type: RESET_GIFF_DATA });
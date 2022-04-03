import { 
    GIFF_FETCH_REQUESTED,
    GIFF_FETCH_SUCCESS,
    GIFF_FETCH_FAILED,
    GIFF_FETCH_NEXT_PAGE_REQUEST,
    GIFF_FETCH_NEXT_PAGE_SUCCESS,
    GIFF_FETCH_NEXT_PAGE_FAILED,
    GIFF_SEARCH_REQUEST,
    GIFF_SEARCH_SUCCESS,
    GIFF_SEARCH_FAILED,
    GIFF_SEARCH_CLEAR,
    THEME_TOGGLE
} from './action-types';
import {THEME } from './../constants';

const { LIGHT, DARK } = THEME;

const detfaultState = {
    giffs: [],
    searchText: '',
    isSearchEnabled: false,
    selectedTheme: LIGHT,
    error: false
}

export const GiphyReducer  = (state = detfaultState, action) => {
   const { payload, type }  = action;

   switch(type){
        case GIFF_FETCH_REQUESTED:
        case GIFF_FETCH_NEXT_PAGE_REQUEST: 
            return {
                ...state,
                loading: true
            };
        
        case GIFF_FETCH_FAILED: 
        case GIFF_FETCH_NEXT_PAGE_FAILED: 
        case GIFF_SEARCH_FAILED: 
            return {
                ...state,
                loading: false,
                error:true
            }
        
        case GIFF_FETCH_SUCCESS: 
        case GIFF_FETCH_NEXT_PAGE_SUCCESS:
            const { giffs } = action;
            const { data, pagination } = giffs;

            return {
                ...state,
                loading: false,
                giffs:[
                    ...state.giffs,
                    ...data
                ],
                giffMetaData:{
                    ...pagination
                }
            };
           
        case GIFF_SEARCH_REQUEST: 
            const { searchText } = payload;

            return {
                ...state,
                loading:true,
                searchText,
                isSearchEnabled: true
            }

        case GIFF_SEARCH_SUCCESS: {
            const { giffs } = action;
            const { data, pagination } = giffs;
    
            return {
                ...state,
                loading: false,
                giffs:[
                    ...data
                ],
                giffMetaData:{
                    ...pagination
                }
            };
        }

        case  GIFF_SEARCH_CLEAR: 
            return {
                ...state,
                error: false,
                searchText: '',
                isSearchEnabled: false
            }

        case THEME_TOGGLE: 
            return {
                ...state,
                selectedTheme: state.selectedTheme === LIGHT ? DARK : LIGHT
            }

        default:
            return state
    }
};
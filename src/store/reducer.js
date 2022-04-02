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
    GIFF_SEARCH_CLEAR
} from './action-types';

const detfaultState = {
    giffs:[],
    searchText: '',
    isSearchEnabled: false
}

export const GiphyReducer  = (state = detfaultState, action) => {
   console.log(action);

   const { payload }  = action;
    switch(action.type){
        case GIFF_FETCH_REQUESTED:
            const data = {
                ...state,
                loading: true
            }       
            return data;
    
        case GIFF_FETCH_SUCCESS: {
            const { giffs } = action;
            const { data, pagination } = giffs;
        
            const d = {
                ...state,
                loading: false,
                giffs: [
                    ...state.giffs,
                    ...data
                ],
                giffMetaData:{
                    ...pagination
                }
            }

            return d;
        }
        
        case GIFF_FETCH_FAILED: {
            const data =  {
                ...state,
                loading: false,
                error: true
            }
                return data;
        }
        
        case GIFF_FETCH_NEXT_PAGE_REQUEST: {
            return {
                ...state,
                loading: true
            };
        }

        case GIFF_FETCH_NEXT_PAGE_SUCCESS:{
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
        }

        case GIFF_FETCH_NEXT_PAGE_FAILED: {
            return {
                ...state,
                loading: false,
                error: true
            };
        }

        case GIFF_SEARCH_REQUEST: {
            const { searchText } = payload;

            return {
                ...state,
                loading:true,
                searchText,
                isSearchEnabled: true
            }
        }

        case GIFF_SEARCH_SUCCESS:{
            const { giffs } = action;
            const { data, pagination } = giffs;
            return {
                ...state,
                loading:false,
                giffs:[
                    ...data
                ],
                giffMetaData:{
                    ...pagination
                }
            };
        }

        case GIFF_SEARCH_FAILED: {
            return {
                ...state,
                error:true
            }
        }

        case  GIFF_SEARCH_CLEAR: {
            return {
                ...state,
                error: false,
                searchText: '',
                isSearchEnabled: false
            }
        }

        default:
            return state
    }
};
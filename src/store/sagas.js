import { call, put, takeLatest, all, fork, select } from 'redux-saga/effects';

import { GIFF_COUNT } from './../constants';
import { 
    GIFF_FETCH_REQUEST,
    GIFF_FETCH_SUCCESS,
    GIFF_FETCH_FAILED,
    GIFF_FETCH_NEXT_PAGE_REQUEST,
    GIFF_FETCH_NEXT_PAGE_SUCCESS,
    GIFF_FETCH_NEXT_PAGE_FAILED,
    GIFF_SEARCH_REQUEST,
    GIFF_SEARCH_SUCCESS,
    GIFF_SEARCH_FAILED
} from './action-types';
import { getSearchEnabled, getSearchText } from './selectors';
import { http } from './../services/http';

const { get } = http;

const loadingGiffs = (offset = 0) => 
    get('trending', { params: { offset, limit: GIFF_COUNT }});


const loadGiffForSearchText = (text, offset = 0) => 
    get('search', { params:{ q: text, offset, limit: GIFF_COUNT }})


function* loadingTrendingGiffs(){
    try {
        const giffs = yield call(loadingGiffs);
        yield put({ type: GIFF_FETCH_SUCCESS , giffs});
    } catch (error) {
        yield put({ type: GIFF_FETCH_FAILED , error});
    }
};

function* loadingNextPageGiffs({ payload }){
    try {
        const { offset } = payload;
        const isSearchEnabledValue = yield select(getSearchEnabled);
        const searchTextValue = yield select(getSearchText);
        let giffs;
        if(isSearchEnabledValue){
            giffs = yield call(loadGiffForSearchText, searchTextValue, offset);
        }else{
            giffs = yield call(loadingGiffs, offset);
        }
        yield put({ type: GIFF_FETCH_NEXT_PAGE_SUCCESS , giffs});
    } catch (error) {
        yield put({ type: GIFF_FETCH_NEXT_PAGE_FAILED , error});
    }
}

function* loadGiffsForSearch({ payload }){
    try {
        const { searchText } = payload;
        const giffs = yield call(loadGiffForSearchText, searchText);
        yield put({ type: GIFF_SEARCH_SUCCESS , giffs});
    } catch (error) {
        yield put({ type: GIFF_SEARCH_FAILED , error});
    }
};

function* giffTrendingSaga(){
    yield takeLatest(GIFF_FETCH_REQUEST, loadingTrendingGiffs);
}

function* giffNextPageSaga(){
    yield takeLatest(GIFF_FETCH_NEXT_PAGE_REQUEST, loadingNextPageGiffs);
}

function* gifSearch(){
    yield takeLatest(GIFF_SEARCH_REQUEST, loadGiffsForSearch);
}

function* sagas(){
    yield all([
        fork(giffTrendingSaga),
        fork(giffNextPageSaga),
        fork(gifSearch)
      ]);
}

export default sagas;
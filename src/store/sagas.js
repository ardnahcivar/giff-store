import { call, put, takeLatest, all, fork, select } from 'redux-saga/effects';

import { 
    GIFF_FETCH_REQUESTED,
    GIFF_FETCH_SUCCESS,
    GIFF_FETCH_FAILED,
    GIFF_FETCH_NEXT_PAGE_REQUEST,
    GIFF_FETCH_NEXT_PAGE_SUCCESS,
    GIFF_FETCH_NEXT_PAGE_FAILED,
    GIFF_SEARCH_REQUEST,
    GIFF_SEARCH_SUCCESS,
    GIFF_SEARCH_FAILED
} from './action-types';
import { isSearchEnabled, searchText } from './selectors';
import { http } from './../services/http';

const { get } = http;

const loadingGiffs = (offset = 0) => 
    get('trending', { params: { offset }});


const loadGiffForSearchText = (text, offset = 0) => 
    get('search', { params:{ q: text, offset }})


function* loadingTrendingGiffs(){
    try {
        const giffs = yield call(loadingGiffs);
        console.log(giffs);
        yield put({ type: GIFF_FETCH_SUCCESS , giffs});
    } catch (error) {
        yield put({ type: GIFF_FETCH_FAILED , error});
    }
};

function* loadingNextPageGiffs({ payload }){
    try {
        const { offset } = payload;
        const isSearchEnabledValue = yield select(isSearchEnabled);
        const searchTextValue = yield select(searchText);
        let giffs;
        if(isSearchEnabledValue){
            const fn = () => loadGiffForSearchText(searchTextValue, offset)
            giffs = yield call(fn);
            console.log(giffs);   

        }else{
            const fn = () => loadingGiffs(offset);
            giffs = yield call(fn);
            console.log(giffs);   
        }
        yield put({ type: GIFF_FETCH_NEXT_PAGE_SUCCESS , giffs});
    } catch (error) {
        yield put({ type: GIFF_FETCH_NEXT_PAGE_FAILED , error});
    }
}

function* loadGiffsForSearch({ payload }){
    try {
        const { searchText } = payload;
        const fn = () => loadGiffForSearchText(searchText)
        const giffs = yield call(fn);
        console.log(giffs);
        yield put({ type: GIFF_SEARCH_SUCCESS , giffs});
    } catch (error) {
        yield put({ type: GIFF_SEARCH_FAILED , error});
    }
};

function* giffTrendingSaga(){
    yield takeLatest(GIFF_FETCH_REQUESTED, loadingTrendingGiffs);
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
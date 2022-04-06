import { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
    loadGiff,
    loadNextPageGiffs,
    getGiffs,
    getGiffMetaData,
    getSearchText,
    getLoading,
    getError
} from '../../store';
import { GIFF_COUNT } from '../../constants';

const options = {
    threshod: [0, 0.10]
};

export const useGiffs = () => {
    const loadingRef = useRef();
    const dispatch = useDispatch();
    const giffs = useSelector(getGiffs);
    const giffMetaData = useSelector(getGiffMetaData);
    const searchText = useSelector(getSearchText);
    const loading = useSelector(getLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(loadGiff());
    },[dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[searchText])

    const fetchNextGiffs = useCallback((entries) => {
        const { isIntersecting } = entries[0];
        if(isIntersecting && giffs.length){
            const { offset } = giffMetaData;
            dispatch(loadNextPageGiffs({ offset: offset + GIFF_COUNT }));
        }
    },[dispatch, giffs, giffMetaData]);

    useEffect(() => {
        const observer = new IntersectionObserver(fetchNextGiffs, options);
        const { current } = loadingRef;
        if(current){
            observer.observe(current);
        }

        return () => {
            if(current){
                observer.unobserve(current);
            }
        }
    },[fetchNextGiffs]);

    const { total_count  } = giffMetaData || {};
    const giffListComplete = total_count === giffs.length;

    return [giffs, loading, loadingRef, error, giffListComplete];
};

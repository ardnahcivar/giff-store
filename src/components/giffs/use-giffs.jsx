import { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadGiff, loadNextPageGiffs } from '../../store';
import { GIFF_COUNT } from '../../constants'

const options = {
    rootMargin: "0px",
    threshod: 0.10
};

export const useGiffs = () => {
    const loadingRef = useRef();
    const dispatch = useDispatch();
    const giffs = useSelector((state) => state.giffs);
    const giffMetaData = useSelector((state) => state.giffMetaData);
    const searchText = useSelector((state) => state.searchText);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

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


    return [giffs, loading, loadingRef, error];
};

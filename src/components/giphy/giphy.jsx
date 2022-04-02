import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadGiff, loadNextPageGiffs } from './../../store';
import { GiphyContainerStyled, LoadingNextGiffIndicator } from './styles';
import { GiffItem } from './../giff-item';
import { Loader } from './../loader';
import {GIFF_COUNT} from './../../constants'

const options = {
    rootMargin:"10px",
    threshod: 0.8
};

const Giphy = () => {
    const loadingRef = useRef();
    const giffsValueRef = useRef();

    const dispatch = useDispatch();
    const giffs = useSelector((state) => state.giffs);
    const giffMetaData = useSelector((state) => state.giffMetaData);
    const searchText = useSelector((state) => state.searchText);
    const loading = useSelector((state) => state.loading);

    giffsValueRef.current = {
        giffs,
        giffMetaData
    } 
    console.log(giffs);


    useEffect(() => {
        dispatch(loadGiff());
    },[dispatch]);

    useEffect(() => {
        console.log(`GIFFS UOPDATED`);
        window.scrollTo(0, 0);
    },[searchText])

    const fetchNextGiffs = useCallback((entries) => {
        console.log(entries);
        const { current: { giffs, giffMetaData } } = giffsValueRef;
        const { isIntersecting } = entries[0];
        if(isIntersecting && giffs.length){
            const { offset } = giffMetaData;
            dispatch(loadNextPageGiffs({ offset: offset + GIFF_COUNT }));
        }
    },[dispatch]);

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

    return (
        <>
            <GiphyContainerStyled>
                {
                    giffs.length ?
                        giffs.map((giphy,index) => <GiffItem key={giphy.id + giphy.title + index} giff={giphy} />)
                        :
                        (
                            <div><p>No Giffs Found...</p></div>
                        )
                }
            </GiphyContainerStyled>
            <LoadingNextGiffIndicator ref={loadingRef}>
                {/* <p>Loading GIFFs...</p> */}
                
                { loading ? <Loader /> : null }
            </LoadingNextGiffIndicator>
        </>

    )
};

export default Giphy;
import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadGiff, loadNextPageGiffs } from '../../store';
import { GiphyContainerStyled, LoadingNextGiffIndicator, ErrorMessagesStyled } from './styles';
import { GiffItem } from '../giff-item';
import { Loader } from '../loader';
import { GIFF_COUNT } from '../../constants'

const options = {
    rootMargin: "0px",
    threshod: 0.10
};

const Giffs = () => {
    const loadingRef = useRef();
    const giffsValueRef = useRef();

    const dispatch = useDispatch();
    const giffs = useSelector((state) => state.giffs);
    const giffMetaData = useSelector((state) => state.giffMetaData);
    const searchText = useSelector((state) => state.searchText);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    giffsValueRef.current = {
        giffs,
        giffMetaData
    } 

    useEffect(() => {
        dispatch(loadGiff());
    },[dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[searchText])

    const fetchNextGiffs = useCallback((entries) => {
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
                            <ErrorMessagesStyled error={error}>
                                <p>No Giffs Found...  :(</p>
                            </ErrorMessagesStyled>
                        )
                }
            </GiphyContainerStyled>
            <LoadingNextGiffIndicator ref={loadingRef}>                
                { loading ? <Loader /> : null }
                { error ? 
                    (<ErrorMessagesStyled error={error}>
                        <p>Error occurred...  :(</p>
                    </ErrorMessagesStyled>) 
                    : null
                }
            </LoadingNextGiffIndicator>
        </>

    )
};

export default Giffs;
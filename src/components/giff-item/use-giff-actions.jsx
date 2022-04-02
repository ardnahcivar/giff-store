import { useCallback, useState } from 'react';


export const useGiffActions = () => {
    const [paused, setPaused] = useState(false);
    const [loaded, setLoaded]  = useState(false);

    const playIt = useCallback(() => {
        setPaused(false);
    },[]);

    const pauseIt = useCallback(() => {
        setPaused(true)
    },[]);

    const onLoadHanlder = useCallback(() => {
        setLoaded(true);
    },[]);

    return [ paused, playIt, pauseIt, loaded, onLoadHanlder ];
};
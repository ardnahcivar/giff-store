import { useCallback, useState } from 'react';


export const useGiffActions = () => {
    const [paused, setPaused] = useState(false);
    const [loaded, setLoaded]  = useState(false);

    const playIt = useCallback((event) => {
        setPaused(false);
        event.preventDefault();
    },[]);

    const pauseIt = useCallback((event) => {
        setPaused(true);
        event.preventDefault();
    },[]);

    const onLoadHanlder = useCallback(() => {
        setLoaded(true);
    },[]);

    return [ paused, playIt, pauseIt, loaded, onLoadHanlder ];
};
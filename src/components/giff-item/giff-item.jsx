import { object } from 'prop-types'; 
import { useState, useCallback } from 'react';
import { Gif } from '@giphy/react-components'
import { GiffItemStyled } from './style';

import { useGiffActions } from './use-giff-actions';
import { Controls } from './controls';

const GiffItem = props => {
    const { giff } = props;
    const [ paused, playIt, pauseIt, loaded, onLoadHanlder ] = useGiffActions();
    const { images: { fixed_height, fixed_height_still } } = giff;

    const imgSrc = paused ? fixed_height_still.url : fixed_height.webp;

    return(
        <GiffItemStyled loaded={loaded}>
            {/* <Gif gif={giff} width={300} /> */}
            <img src={imgSrc} width={"250px"} height={"200px"} onLoad={onLoadHanlder} alt={giff.title} loading={'lazy'}/>
            <Controls paused={paused} playIt={playIt} pauseIt={pauseIt}/>
        </GiffItemStyled>
    )
};

GiffItem.propTypes = {
    giff: object
}

export default GiffItem;
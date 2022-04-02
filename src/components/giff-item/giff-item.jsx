import { object } from 'prop-types'; 
import { GiffItemContainer, GiffItemStyled } from './style';

import { useGiffActions } from './use-giff-actions';
import { Controls } from './controls';

const GiffItem = props => {
    const { giff } = props;
    const [ paused, playIt, pauseIt, loaded, onLoadHanlder ] = useGiffActions();
    const { images: { fixed_height_downsampled, fixed_height_still } } = giff;

    const imgSrc = paused ? fixed_height_still.url : fixed_height_downsampled.webp;

    return(
        <GiffItemContainer href="">
            <GiffItemStyled loaded={loaded}>
                <img src={imgSrc} width={"250px"} onLoad={onLoadHanlder} alt={giff.title} loading={'lazy'}/>
                <Controls paused={paused} playIt={playIt} pauseIt={pauseIt}/>
            </GiffItemStyled>
        </GiffItemContainer>
    )
};

GiffItem.propTypes = {
    giff: object
}

export default GiffItem;
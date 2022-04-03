import { object } from 'prop-types'; 

import { GiffItemContainer, GiffItemStyled } from './styles';
import { useGiffActions } from './use-giff-actions';
import { Controls } from './controls';
import { useTheme } from './../../use-theme';

const GiffItem = props => {
    const theme= useTheme();
    const { giff } = props;
    const [ paused, playIt, pauseIt, loaded, onLoadHanlder ] = useGiffActions();
    const { images: { fixed_height_downsampled, fixed_height_still }, url, title } = giff;

    const imgSrc = paused ? fixed_height_still.url : fixed_height_downsampled.webp;

    return(
        <GiffItemContainer href={url} title={title}  target="_blank" rel="noopener noreferrer" theme={theme}>
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
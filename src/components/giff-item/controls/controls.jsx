import { bool, func, string } from 'prop-types'; 

import { PauseIcon } from './pause-icon';
import { PlayIcon } from './play-icon';

import { ControlsStyled } from './style';
const Controls = props => {

    const { paused, playIt, pauseIt } = props;

    return(
        <ControlsStyled>
            {
                paused ?
                <span onClick={playIt}><PlayIcon /></span>
                : 
                <span onClick={pauseIt}><PauseIcon /></span>
            }
        </ControlsStyled>
    )
};

Controls.propTypes = {
    paused: bool,
    playIt: func,
    pauseIt: func,
    imgSrc: string
};

export default Controls;
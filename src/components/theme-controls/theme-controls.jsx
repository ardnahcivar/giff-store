import { useDispatch, useSelector } from 'react-redux';

import { ThemeControlsContainer } from './styles';
import { THEME } from './../../constants';
import { DARK_ICON, LIGHT_ICON } from './theme-icons';

import { ThemeControlStyled } from './styles';
import { toggleTheme } from './../../store';
import { useTheme } from './../../use-theme';

const { LIGHT } = THEME;

const ThemeControls = () => {
    const theme = useTheme();
    const selectedTheme = useSelector(state => state.selectedTheme);
    const dispatch = useDispatch();

    const Icon = selectedTheme === LIGHT ? DARK_ICON : LIGHT_ICON;

    const themeToggleHandler = () => {
        dispatch(toggleTheme())
    };

    return(
        <ThemeControlsContainer>
            {
                <ThemeControlStyled theme={theme} onClick={themeToggleHandler}>
                    {Icon}
                </ThemeControlStyled>
            }            
        </ThemeControlsContainer>            
    )
};

export default ThemeControls;
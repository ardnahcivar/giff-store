import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { THEME } from './../../constants';
import { DARK_ICON, LIGHT_ICON } from './theme-icons';
import { ThemeControlsContainer, ThemeControlStyled } from './styles';
import { toggleTheme } from './../../store';
import { useTheme } from './../../use-theme';
import { getSelectedTheme } from './../../store';

const { LIGHT } = THEME;

const ThemeControls = () => {
    const theme = useTheme();
    const selectedTheme = useSelector(getSelectedTheme);
    const dispatch = useDispatch();

    const Icon = selectedTheme === LIGHT ? DARK_ICON : LIGHT_ICON;

    const themeToggleHandler = useCallback(() => {
        dispatch(toggleTheme())
    },[dispatch]);

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
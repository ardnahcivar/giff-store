import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { LogoStyled, HeaderStyled, TrendingStyled } from './styles';
import { Search } from '../search';
import { ThemeControls } from '../theme-controls';
import { useTheme } from '../../use-theme';
import { TRENDING_TEXT } from './../../constants';
import { loadGiff, resetGiffData } from './../../store';

const Header = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const showTrending = useCallback((event) => {
        dispatch(resetGiffData());
        dispatch(loadGiff());
        event.preventDefault();
    },[dispatch]);

    return(
        <HeaderStyled theme={theme}>
            <LogoStyled>
                <img title="Giff store" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABU0lEQVRoge2ZMW7CMBSG/5gupEOo1FyhCPUMZWJloCeoejDECegFOlTKKTgDCBohsZEwWLQODjg2DrbF+xYrsRO9z35O7AQgiPsmUjV4WyzLtoNIowjzxbK+cjy4GCNrIyBdXp+6eO+nRtd6IQCYS3gjAJhJeCUA6Et4JwDoSXgpAHCJyYta4uEGsSj5We+Mr/V2BJpCAq4hAdeQgGtIwDUk4Jqr10LzmdlOqinxN6Qt7ePofysc/AgEL2B9Od15BuIhwBL8ffPIp7xMPqtt86l8TmzfBOsC8RBgPdt3PY91AZbwMp8BKKp1Yo+f9rJOr4vY35Ednw9FNT1UAeq0FaFJLFGCjwI7P0nrME0h6yNQ/PIy+ZCDF4+biqmwLrDLgGIDyO/PdrCeQvsVsP2qr6tLE9PUORL8JA5ewIsfHJfI+qn/PziugQRcQwKuCV6AIO6dAzY5PBFrzuoPAAAAAElFTkSuQmCC" alt='Giff store'/>
            </LogoStyled>
            <TrendingStyled theme={theme} onClick={showTrending}>{TRENDING_TEXT}</TrendingStyled>
            <Search />
            <ThemeControls />
        </HeaderStyled>
    );
};

export default Header;
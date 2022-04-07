import { object, node } from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { useThemeProvider } from './use-theme';
import { THEME } from './constants';

const { LIGHT } = THEME;

export const ThemeProvider = ({ theme = LIGHT, children }) => {
    const themeValue = useThemeProvider({ theme });

    return <StyledThemeProvider theme={themeValue}>{children}</StyledThemeProvider>
};

ThemeProvider.propTypes = {
    theme: object,
    children: node
};

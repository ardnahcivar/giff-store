import { object, node } from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { useThemeProvider } from './use-theme';
import { themes } from './constants';

const { light } = themes;

export const ThemeProvider = ({ theme = light, children }) => {
    const themeValue = useThemeProvider({ theme });

    return <StyledThemeProvider theme={themeValue}>{children}</StyledThemeProvider>
};

ThemeProvider.propTypes = {
    theme: object,
    children: node
};

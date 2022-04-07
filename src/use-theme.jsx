import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { THEME, themes } from './constants';

const { LIGHT } = THEME;

export const useTheme = () => useContext(ThemeContext) || LIGHT;

export const useThemeProvider = ({ theme }) => {
    const { [theme]: themeValue }  = themes;
  
    const seletedTheme = {
        ...themeValue
    };
    return seletedTheme;
}
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { themes } from './constants';

const { light } = themes;

export const useTheme = () => useContext(ThemeContext) || light;

export const useThemeProvider = ({ theme }) => {
    console.log(themes)
    const { [theme]: themeValue }  = themes;
    
    const seletedTheme = {
        ...themeValue
    };
    return seletedTheme
}
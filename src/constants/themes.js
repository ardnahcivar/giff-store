import { THEME } from './constants';

const { LIGHT, DARK } = THEME;

const themes = {
    [LIGHT]:{
        primary500: '#fff',
        primary400: '#e6e6e6',
        primary300: '#fafafa',
        secondary: '#181818'
    },
    [DARK]:{
        primary500: '#181818',
        primary400: '#100c08',
        primary300: '#2d2d2d',
        secondary: '#fff'
    }
};

export default themes; 
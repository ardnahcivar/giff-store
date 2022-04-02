import { THEME } from './constants';

const { LIGHT, DARK } = THEME;

const themes = {
    [LIGHT]:{
        primary500: '#fff',
        primary400: '#e6e6e6',
        secondary: '#181818'
    },
    [DARK]:{
        primary500: '#181818',
        primary400: '#100c08',
        secondary: '#fff'
    }
};

export default themes; 
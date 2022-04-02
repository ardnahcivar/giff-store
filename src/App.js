import { Giphy } from './components/giphy';

import { useSelector } from 'react-redux';

import {  ThemeProvider } from './theme-provider';

import { Header } from './components/header';
import { GlobalStyles, AppContainerStyled, GiffContainer } from './style';
import { themes } from './constants';

const { light } = themes;

function App() {
  const theme = useSelector(state => state.selectedTheme);
  
  return (
    <ThemeProvider theme={ theme || light}>
      <GlobalStyles />
      <AppContainerStyled>
        <Header />
        <GiffContainer>
          <Giphy />
        </GiffContainer>
      </AppContainerStyled>
    </ThemeProvider>
  );
}

export default App;

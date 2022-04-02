import { useSelector } from 'react-redux';

import { Giffs } from './components/giffs';
import {  ThemeProvider } from './theme-provider';
import { Header } from './components/header';
import { GlobalStyles, AppContainerStyled, GiffContainer } from './style';
import { themes } from './constants';
import { TrendingChip } from './components/trending-chip';

const { light } = themes;

const App = () => {
  const theme = useSelector(state => state.selectedTheme);
  
  return (
    <ThemeProvider theme={ theme || light}>
      <GlobalStyles />
      <AppContainerStyled>
        <Header />
        <TrendingChip />
        <GiffContainer>
          <Giffs />
        </GiffContainer>
      </AppContainerStyled>
    </ThemeProvider>
  );
}

export default App;

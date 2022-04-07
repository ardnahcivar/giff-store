import { useSelector } from 'react-redux';

import { Giffs, Header, TrendingChip } from './components';
import {  ThemeProvider } from './theme-provider';
import { GlobalStyles, AppContainerStyled, GiffContainer } from './styles';
import { THEME } from './constants';

const { LIGHT } = THEME;

const App = () => {
  const theme = useSelector(state => state.selectedTheme);
  
  return (
    <ThemeProvider theme={ theme || LIGHT}>
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

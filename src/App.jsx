import { useSelector } from 'react-redux';

import { Giffs, Header, TrendingChip } from './components';
import {  ThemeProvider } from './theme-provider';
import { GlobalStyles, AppContainerStyled, GiffContainer } from './style';
import { themes } from './constants';

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

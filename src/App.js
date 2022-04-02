import { Giphy } from './components/giphy';

import { Provider } from 'react-redux';

import { store } from './store';
import { Header } from './components/header';
import { GiffContainer } from './style';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <GiffContainer>
          <Giphy />
        </GiffContainer>
      </div>
    </Provider>
  );
}

export default App;

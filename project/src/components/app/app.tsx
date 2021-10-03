import {MainScreen} from '../main/main';
import {AppProps} from '../../types/app';

function App({AmountPlacesToLive}: AppProps): JSX.Element {
  return (
    <MainScreen
      AmountPlacesToLive={AmountPlacesToLive}
    />
  );
}

export default App;

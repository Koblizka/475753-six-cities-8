import {MainScreen} from '../main/main';

type AppProps = {
  AmountPlacesToLive: number;
};

function App({AmountPlacesToLive}: AppProps): JSX.Element {
  return (
    <MainScreen
      AmountPlacesToLive={AmountPlacesToLive}
    />
  );
}

export default App;

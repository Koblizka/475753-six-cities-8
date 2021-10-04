import {MainScreen} from '../main/main';

type AppProps = {
  amountPlacesToLive: number;
};

function App({amountPlacesToLive}: AppProps): JSX.Element {
  return (
    <MainScreen
      amountPlacesToLive={amountPlacesToLive}
    />
  );
}

export default App;

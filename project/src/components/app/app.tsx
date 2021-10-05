import {MainScreen} from '../main/main';
import {FavoritesScreen} from '../../favorites/favorites';
import {OfferScreen} from '../offer/offer';
import LoginScreen from '../login/login';
import {NotFoundScreen} from '../not-found/not-found';
import {PrivateRoute} from '../private-route/private-route';
import {
  AppRoute,
  AuthorizationStatus
} from '../../common/const';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

type AppProps = {
  amountPlacesToLive: number;
};

function App({amountPlacesToLive}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main} >
          <MainScreen
            amountPlacesToLive={amountPlacesToLive}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          authorizationStatus={AuthorizationStatus.NotAuth}
          render={() => <FavoritesScreen />}
        />
        <Route exact path={AppRoute.Room}>
          <OfferScreen />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

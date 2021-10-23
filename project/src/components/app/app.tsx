import MainScreen from '../main/main';
import FavoritesScreen from '../favorites/favorites';
import OfferScreen from '../offer-details/offer-details';
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


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main} >
          <MainScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          authorizationStatus={AuthorizationStatus.IsAuth}
          render={() => (
            <FavoritesScreen />)}
        />
        <Route exact path={AppRoute.Offers}>
          <OfferScreen />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.NotFound}>
          <NotFoundScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import LoginScreen from '../login-screen/login-screen';
import {NotFoundScreen} from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

import {AppRoute} from '../../common/const';
import {
  Switch,
  Route
} from 'react-router-dom';


function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path={AppRoute.Main} >
        <MainScreen />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.Favorites}
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
  );
}

export default App;

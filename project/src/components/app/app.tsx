import MainScreen from '../main/main';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-details/offer-details';
import LoginScreen from '../login/login';
import {NotFoundScreen} from '../not-found/not-found';
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

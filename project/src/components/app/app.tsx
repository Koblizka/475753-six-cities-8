import {MainScreen} from '../main/main';
import {FavoritesScreen} from '../favorites/favorites';
import {OfferScreen} from '../offer-details/offer-details';
import LoginScreen from '../login/login';
import {NotFoundScreen} from '../not-found/not-found';
import {PrivateRoute} from '../private-route/private-route';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

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
  offers: Offer[];
  reviews: Review[]
};

function App({amountPlacesToLive, offers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main} >
          <MainScreen
            amountPlacesToLive={amountPlacesToLive}
            offers={offers}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          authorizationStatus={AuthorizationStatus.IsAuth}
          render={() => <FavoritesScreen offers={offers} />}
        />
        <Route exact path={AppRoute.Offers}>
          <OfferScreen
            offers={offers}
            reviews={reviews}
          />
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

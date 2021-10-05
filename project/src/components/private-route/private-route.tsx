import {AuthorizationStatus} from '../../common/const';
import {AppRoute} from '../../common/const';
import {Component} from 'react';
import {
  Route,
  RouteProps,
  Redirect
} from 'react-router';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: string;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, component, ...rest} = props;

  return (
    <Route
      {...rest}
      render = {(routeProps) => (
        (authorizationStatus === AuthorizationStatus.IsAuth)
          ? <Component {...routeProps}/>
          : <Redirect to={AppRoute.SignIn} />
      )}
    />
  );
}

export {PrivateRoute};

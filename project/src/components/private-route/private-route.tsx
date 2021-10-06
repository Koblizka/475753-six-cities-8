import {AuthorizationStatus} from '../../common/const';
import {AppRoute} from '../../common/const';
import {
  Route,
  RouteProps,
  Redirect
} from 'react-router';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: string;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, render, ...rest} = props;

  return (
    <Route
      {...rest}
      render = {() => (
        (authorizationStatus === AuthorizationStatus.IsAuth)
          ? render()
          : <Redirect to={AppRoute.SignIn} />
      )}
    />
  );
}

export {PrivateRoute};

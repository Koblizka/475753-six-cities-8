import {AuthorizationStatus} from '../../common/const';
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
  const {exact, path, render, authorizationStatus} = props;
  return (
    <Route
      exact={exact}
      path={path}
      render = {() => (
        (authorizationStatus === AuthorizationStatus.IsAuth)
          ? render()
          : <Redirect to='/login' />
      )}
    />
  );
}

export {PrivateRoute};

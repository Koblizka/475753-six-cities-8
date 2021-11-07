import {AuthorizationStatus} from '../../common/const';
import {AppRoute} from '../../common/const';
import {useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';

import {
  Route,
  RouteProps,
  Redirect
} from 'react-router';


type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const {render, ...rest} = props;

  const handleAuthoriztionCheck = () => (
    (authorizationStatus === AuthorizationStatus.IsAuth)
      ? render()
      : <Redirect to={AppRoute.SignIn}/>
  );

  return (
    <Route
      {...rest}
      render={handleAuthoriztionCheck}
    />
  );
}

export {PrivateRoute};
export default PrivateRoute;

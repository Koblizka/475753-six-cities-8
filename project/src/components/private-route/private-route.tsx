import {AuthorizationStatus} from '../../common/const';
import {AppRoute} from '../../common/const';
import {
  Route,
  RouteProps,
  Redirect
} from 'react-router';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

const mapStateToProps = ({authorizationStatus}: State) => (
  {
    authorizationStatus,
  }
);

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;


function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {authorizationStatus, render, ...rest} = props;

  const checkAuthoriztion = () => (
    (authorizationStatus === AuthorizationStatus.IsAuth)
      ? render()
      : <Redirect to={AppRoute.SignIn}/>
  );

  return (
    <Route
      {...rest}
      render={checkAuthoriztion}
    />
  );
}

export {PrivateRoute};
export default connector(PrivateRoute);

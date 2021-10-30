import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../common/const';
import {logoutAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/actions';
import {State} from '../../types/state';


const mapStateToProps = ({authorizationStatus}: State) => (
  {
    authorizationStatus,
  }
);

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSignOut() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserNav({authorizationStatus, onSignOut}: PropsFromRedux): JSX.Element {
  return (
    <nav className="header__nav">
      {
        (authorizationStatus === AuthorizationStatus.IsAuth)
          ? (
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="/profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  to="/login"
                  onClick={onSignOut}
                >
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          )
          : (
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to='/login'>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__login">Sign in</span>
                </Link>
              </li>
            </ul>
          )
      }
    </nav>
  );
}

export {UserNav};
export default connector(UserNav);

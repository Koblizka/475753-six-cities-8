import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../common/const';
import {logoutAction} from '../../store/api-actions';
import {getAuthorizationStatus, getUserAuthData} from '../../store/user/selectors';


function UserNav(): JSX.Element {
  const dispatch = useDispatch();

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const userAuthData = useSelector(getUserAuthData);

  const handleSignOut = () => dispatch(logoutAction());

  return (
    <nav className="header__nav">
      {
        (authorizationStatus === AuthorizationStatus.IsAuth)
          ? (
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper" style={ {backgroundImage: `url(${userAuthData?.userAvatar})`} }>
                  </div>
                  <span className="header__user-name user__name">{userAuthData?.email}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  to="/login"
                  onClick={handleSignOut}
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
export default UserNav;

import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../common/const';
import UserNav from '../user-nav/user-nav';

type PageHeaderProps = {
  isLoginPage?: boolean;
}

function PageHeader({isLoginPage}: PageHeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {!isLoginPage && <UserNav />}
        </div>
      </div>
    </header>
  );
}


export default React.memo(PageHeader);
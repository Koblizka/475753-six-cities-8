import {FormEvent, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, City} from '../../common/const';
import {loginAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selectors';
import PageHeader from '../page-header/page-header';
import {getRandomIntInclusive} from '../../utils/utils';
import {changeActiveCity} from '../../store/actions';

function LoginScreen(): JSX.Element {
  const PASSWORD_MIN_LENGTH = 2;

  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const allCities = [...Object.keys(City)];

  const getRandomeCity = () => {
    const CITIES_MAX_LENGTH: number = allCities.length - 1;

    return allCities[getRandomIntInclusive(0, CITIES_MAX_LENGTH)];
  };

  const previewCity = getRandomeCity();

  const validatePassword = (passwordValue: string) => {
    const passwordReg = /(?=.*[a-zA-Z])(?=.*[0-9])/;

    if (passwordValue.length < PASSWORD_MIN_LENGTH)
    {
      passwordRef.current?.setCustomValidity('Пароль не может быть меньше 2ух знаков');
      passwordRef.current?.reportValidity();
    }
    else if (!passwordReg.test(passwordValue))
    {
      passwordRef.current?.setCustomValidity('Пароль должен включать в себя и цифры, и  лат.буквы');
      passwordRef.current?.reportValidity();
    }
    else
    {
      passwordRef.current?.setCustomValidity('');
      passwordRef.current?.reportValidity();
    }
  };

  const handleCityClick = () => {
    dispatch(changeActiveCity(previewCity));
  };

  const handlePasswordChange = (evt: FormEvent<HTMLInputElement>) => {
    validatePassword(evt.currentTarget.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction(
        {
          login: loginRef.current.value,
          password: passwordRef.current.value,
        },
      ),
      );
    }
  };

  if (authorizationStatus === AuthorizationStatus.IsAuth) {
    return <Redirect to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login" >
      <PageHeader isLoginPage />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label
                  className="visually-hidden"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  data-testid="login"
                  id="email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label
                  className="visually-hidden"
                  htmlFor="email"
                >
                  Password
                </label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  data-testid="password"
                  id="password"
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={handleCityClick}>
                <span>{previewCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {LoginScreen};
export default LoginScreen;

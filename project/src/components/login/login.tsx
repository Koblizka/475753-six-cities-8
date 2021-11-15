import {FormEvent, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../common/const';
import {loginAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selectors';


function LoginScreen(): JSX.Element {
  const dispatch = useDispatch();

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

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
                id="email"
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
            <a className="locations__item-link" href="/">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export {LoginScreen};
export default LoginScreen;

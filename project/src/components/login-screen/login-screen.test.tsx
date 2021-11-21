import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { AuthorizationStatus } from '../../common/const';
import LoginScreen from './login-screen';

const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.NotAuth,
  },
});

describe('Component: LoginScreen', () => {
  it('should render "LoginScreen" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={store}>
        <Router history={history}>
          <LoginScreen />
        </Router>
      </Provider>,
    );

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'test@test.test');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/test@test.test/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  },
  );
});


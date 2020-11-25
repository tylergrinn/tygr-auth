import Logo from '@tygr/logo';
import useSwitch from '@tygr/switch';
import React, { PropsWithChildren } from 'react';
import API_BASE_URL from '../../api-base-url';
import { AuthStore } from '../../store';
import * as icons from '../icons';
import LocalForm from './LocalForm';

interface LoginProps {
  dispatch: AuthStore['Dispatch'];
  state: AuthStore['State'];
  google?: boolean;
  twitter?: boolean;
  github?: boolean;
}

export default function Login(props: PropsWithChildren<LoginProps>) {
  const { children, dispatch, state, google, twitter, github } = props;

  const [authContainer, setAuth, LOGIN, REGISTER, RESET] = useSwitch(
    { name: 'auth' },
    'login',
    'register',
    'reset'
  );

  const [provContainer, setProv, LOCAL, EXTERNAL] = useSwitch(
    { name: 'prov' },
    'local',
    'external'
  );

  return (
    <div className="tygr-login" {...authContainer} {...provContainer}>
      {children || (
        <div className="header">
          <Logo height="32px" />
          <h3>TyGr Login</h3>
        </div>
      )}

      <nav>
        <button
          id="login"
          type="button"
          onClick={setAuth('login')}
          className={EXTERNAL ? 'selected expanded' : LOGIN ? 'selected' : ''}
        >
          Login{EXTERNAL ? '/Register' : ''}
        </button>
        <button
          type="button"
          data-prov="local"
          onClick={setAuth('register')}
          id="register"
          className={REGISTER ? 'selected' : ''}
        >
          Register
        </button>
        <button
          type="button"
          onClick={() => {
            setAuth('reset')();
            setProv('local')();
          }}
          className={RESET ? 'selected' : "'"}
        >
          Reset Password
        </button>
      </nav>

      <nav data-auth="!reset">
        <button
          type="button"
          onClick={setProv('local')}
          className={LOCAL ? 'selected' : ''}
        >
          Local
        </button>
        <button
          type="button"
          onClick={setProv('external')}
          className={EXTERNAL ? 'selected' : ''}
        >
          Use Provider:
          {google && <icons.Google />}
          {github && <icons.Github />}
          {twitter && <icons.Twitter />}
        </button>
      </nav>

      <LocalForm {...{ LOGIN, REGISTER, RESET, dispatch, state }} />

      <div className="providers">
        {google && (
          <a
            className="provider"
            data-prov="external"
            href={API_BASE_URL + '/google'}
          >
            <icons.Google /> Sign in with Google
          </a>
        )}
        {github && (
          <a
            className="provider"
            data-prov="external"
            href={API_BASE_URL + '/github'}
          >
            <icons.Github /> Sign in with Github
          </a>
        )}
        {twitter && (
          <a
            className="provider"
            data-prov="external"
            href={API_BASE_URL + '/twitter'}
          >
            <icons.Twitter />
            Sign in with Twitter
          </a>
        )}
      </div>
    </div>
  );
}

/* eslint-disable complexity */
import Logo from '@tygr/logo';
import useTabs from '@tygr/tabs';
import React from 'react';
import * as actions from '../actions';
import Github from '../components/Github';
import Google from '../components/Google';
import Twitter from '../components/Twitter';
import useInput from '../hooks/use-input';

export default function LoginModal() {
  const [authAttributes, setAuthTab, LOGIN, REGISTER, RESET_PASSWORD] = useTabs(
    'login',
    'register',
    'reset-password'
  );

  const [providerAttributes, setProviderTab, LOCAL, EXTERNAL] = useTabs(
    'local',
    'external'
  );

  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();
  const [confirmPassword, onConfirmPasswordChange] = useInput();

  const login = () => {
    actions.login(email, password);
  };

  const register = () => {
    if (password === confirmPassword) actions.register(email, password);
    else console.log('Passwords do not match');
  };

  const resetPassword = () => {
    actions.resetPassword(email);
  };

  const github = () => {
    actions.github();
  };

  const twitter = () => {
    actions.twitter();
  };

  const google = () => {
    actions.google();
  };

  return (
    <div
      className="tygr-login-modal"
      {...authAttributes}
      {...providerAttributes}
    >
      <div className="header">
        <Logo height="32px" />
        <h3>TyGr Login</h3>
      </div>

      <div className="tab-control">
        <button
          onClick={setAuthTab('login')}
          className={LOGIN ? 'selected' : ''}
          tabIndex={1}
        >
          Login
        </button>
        <button
          onClick={setAuthTab('register')}
          className={REGISTER ? 'selected' : ''}
          tabIndex={2}
        >
          Register
        </button>
        <button
          onClick={() => {
            setAuthTab('reset-password')();
            setProviderTab('local')();
          }}
          className={RESET_PASSWORD ? 'selected' : "'"}
          tabIndex={3}
        >
          Reset Password
        </button>
      </div>

      <div data-tab="!reset-password" className="tab-control">
        <button
          onClick={setProviderTab('local')}
          className={LOCAL ? 'selected' : ''}
          tabIndex={RESET_PASSWORD ? -1 : 4}
        >
          Local
        </button>
        <button
          onClick={setProviderTab('external')}
          className={EXTERNAL ? 'selected' : ''}
          tabIndex={RESET_PASSWORD ? -1 : 5}
        >
          Use Provider:
          <Google />
          <Github />
          <Twitter />
        </button>
      </div>

      <label data-tab="!external" htmlFor="email">
        Email Address
      </label>
      <input
        placeholder="Enter your email"
        required
        id="email"
        name="email"
        value={email}
        onChange={onEmailChange}
        data-tab="!external"
        type="text"
        tabIndex={EXTERNAL ? -1 : 6}
      />

      <label htmlFor="password" data-tab="!external !reset-password">
        Password
      </label>
      <input
        placeholder="Enter password"
        required={LOGIN || REGISTER}
        id="password"
        name="password"
        data-tab="!external !reset-password"
        value={password}
        onChange={onPasswordChange}
        type="password"
        tabIndex={EXTERNAL || RESET_PASSWORD ? -1 : 7}
      />

      <label htmlFor="confirm-password" data-tab="register local">
        Confirm Password
      </label>
      <input
        placeholder="Confirm password"
        required={REGISTER}
        id="confirm-password"
        name="confirm-password"
        data-tab="register local"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        tabIndex={REGISTER && LOCAL ? 8 : -1}
        type="password"
      />

      <button
        tabIndex={LOCAL && LOGIN ? 9 : -1}
        className="action-button"
        data-tab="local login"
        onClick={login}
      >
        Login
      </button>
      <button
        className="action-button"
        data-tab="local register"
        onClick={register}
        tabIndex={LOCAL && REGISTER ? 10 : -1}
      >
        Register
      </button>
      <button
        className="action-button"
        data-tab="local reset-password"
        onClick={resetPassword}
        tabIndex={LOCAL && RESET_PASSWORD ? 11 : -1}
      >
        Reset Password
      </button>
      <button
        className="action-button"
        data-tab="!reset-password !local"
        onClick={google}
        tabIndex={RESET_PASSWORD || LOCAL ? -1 : 12}
      >
        <Google /> Sign in with Google
      </button>
      <button
        className="action-button"
        data-tab="!reset-password !local"
        onClick={github}
        tabIndex={RESET_PASSWORD || LOCAL ? -1 : 13}
      >
        <Github /> Sign in with Github
      </button>
      <button
        className="action-button"
        data-tab="!reset-password !local"
        onClick={twitter}
        tabIndex={RESET_PASSWORD || LOCAL ? -1 : 14}
      >
        <Twitter />
        Sign in with Twitter
      </button>
    </div>
  );
}

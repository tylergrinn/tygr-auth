import Logo from '@tygr/logo';
import useSwitch from '@tygr/switch';
import React, { FormEvent, PropsWithChildren } from 'react';
import * as actions from './actions';
import { Github, Google, Twitter } from './components/icons';
import useInput from './hooks/use-input';
import invalidMessage from './util/invalid-message';

export default function LoginModal(props: PropsWithChildren<{}>) {
  const { children } = props;

  const [authContainer, setAuth, LOGIN, REGISTER, RESET_PASSWORD] = useSwitch(
    { name: 'auth' },
    'login',
    'register',
    'reset-password'
  );

  const [provContainer, setProv, LOCAL, EXTERNAL] = useSwitch(
    { name: 'prov' },
    'local',
    'external'
  );

  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  const onFormSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    switch ((ev as any).target.elements['action']) {
      case 'Login':
        actions.login(email, password);
        break;
      case 'Register':
        actions.register(email, password);
        break;
      case 'Reset Password':
        actions.resetPassword(email);
        break;
    }
    return true;
  };

  return (
    <div className="tygr-auth" {...authContainer} {...provContainer}>
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
            setAuth('reset-password')();
            setProv('local')();
          }}
          className={RESET_PASSWORD ? 'selected' : "'"}
        >
          Reset Password
        </button>
      </nav>

      <nav data-auth="!reset-password">
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
          <Google />
          <Github />
          <Twitter />
        </button>
      </nav>

      <form data-prov="local" onSubmit={onFormSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          placeholder="Enter your email"
          required
          id="email"
          value={email}
          onChange={onEmailChange}
          type="email"
        />

        <label htmlFor="password" data-auth="!reset-password">
          Password
        </label>
        <input
          placeholder="Enter password"
          required={LOGIN || REGISTER}
          id="password"
          data-auth="!reset-password"
          value={password}
          onChange={onPasswordChange}
          minLength={6}
          type="password"
        />

        <label htmlFor="confirm-password" data-auth="register">
          Confirm Password
        </label>
        <input
          placeholder="Confirm password"
          required={REGISTER}
          id="confirm-password"
          data-auth="register"
          type="password"
          pattern={password}
          {...invalidMessage('Passwords do not match')}
        />

        <input data-auth="login" type="submit" value="Login" />
        <input
          name="action"
          type="submit"
          value="Register"
          data-auth="register"
        />
        <input
          name="action"
          type="submit"
          value="Reset Password"
          data-auth="reset-password"
        />
      </form>

      <div className="providers" data-prov="external">
        <button name="action" value="Google" onClick={actions.google}>
          <Google /> Sign in with Google
        </button>
        <button name="action" value="Github" onClick={actions.github}>
          <Github /> Sign in with Github
        </button>
        <button name="action" value="Twitter" onClick={actions.twitter}>
          <Twitter />
          Sign in with Twitter
        </button>
      </div>
    </div>
  );
}

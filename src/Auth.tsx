import useSwitch from '@tygr/switch';
import React, { FC, useEffect } from 'react';
import Login from './components/Login';
import * as Spinners from './components/Spinners';
import User from './components/User';
import useAuthStore, { actions, AuthStore } from './store';

interface AccountProps {
  state: AuthStore['State'];
  dispatch: AuthStore['Dispatch'];
}

export interface AuthProps {
  Header?: FC;
  Account?: FC<AccountProps>;
  google: boolean;
  twitter: boolean;
  github: boolean;
}

export default function Auth(props: AuthProps) {
  const [state, , dispatch] = useAuthStore();

  useEffect(() => dispatch(actions.init), []);
  useEffect(() => {
    if (state.error) alert(state.error);
  }, [state.error]);

  const { loading, user } = state;
  const { Header, Account, google, twitter, github } = props;

  const [pageContainer, setPage] = useSwitch(
    { name: 'page' },
    'loading',
    'login',
    'user'
  );
  const currentPage = loading ? 'loading' : user ? 'user' : 'login';
  useEffect(setPage(currentPage), [loading, user]);

  return (
    <div {...pageContainer} className="tygr-auth">
      <div data-page="user">
        <User state={state} dispatch={dispatch}>
          {Account && <Account state={state} dispatch={dispatch} />}
        </User>
      </div>
      <div data-page="loading">
        <Spinners.Large />
      </div>
      <div data-page="login">
        <Login
          dispatch={dispatch}
          state={state}
          google={google}
          twitter={twitter}
          github={github}
        >
          {Header && <Header />}
        </Login>
      </div>
    </div>
  );
}

import React, { PropsWithChildren } from 'react';
import { actions, AuthStore } from '../store';

interface UserProps {
  state: AuthStore['State'];
  dispatch: AuthStore['Dispatch'];
}

export default function User(props: PropsWithChildren<UserProps>) {
  const { state, children, dispatch } = props;

  const deleteAccount = () => {
    if (confirm('Are you sure you want to delete your account?'))
      dispatch(actions.deleteAccount);
  };

  return (
    <div className="tygr-user">
      <div className="header">
        <h3>Welcome, {state.user?.email}!</h3>
        <p>Signed in locally</p>
      </div>
      {children || <p>You are now signed in.</p>}
      <div className="actions">
        <button onClick={() => dispatch(actions.logout)}>Sign out</button>
        <button onClick={deleteAccount}>Delete account</button>
      </div>
    </div>
  );
}

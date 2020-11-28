import React, { PropsWithChildren, useContext } from 'react';
import { actions, AuthContext } from '../store';

export default function User(props: PropsWithChildren<{}>) {
  const { children } = props;
  const [{ user }, dispatch] = useContext(AuthContext);

  if (!user) {
    return <p>Not logged in</p>;
  }

  const deleteAccount = () => {
    if (confirm('Are you sure you want to delete your account?'))
      dispatch(actions.deleteAccount);
  };

  return (
    <div className="tygr-user">
      {children || (
        <div className="default">
          <h3>Welcome, {user.email}!</h3>
          <p>
            Signed in
            {(() => {
              switch (user.provider) {
                case 'google':
                  return ' with Google';
                case 'twitter':
                  return ' with Twitter';
                case 'github':
                  return ' with Github';
                case 'local':
                default:
                  return ' locally';
              }
            })()}
          </p>
          <div className="content">
            <p>You are now signed in.</p>
          </div>
        </div>
      )}
      <div className="actions">
        <button onClick={() => dispatch(actions.logout)}>Sign out</button>
        <button onClick={deleteAccount}>Delete account</button>
      </div>
    </div>
  );
}

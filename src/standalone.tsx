import React from 'react';
import ReactDOM from 'react-dom';
import AuthComponent, { AuthProps } from './Auth';
import TygrBoundary from './components/ErrorBoundary';
import useAuthStore, { AuthContext } from './store';

function Auth(props: AuthProps) {
  const store = useAuthStore();
  return (
    <TygrBoundary>
      <AuthContext.Provider value={store}>
        <AuthComponent {...props} />
      </AuthContext.Provider>
    </TygrBoundary>
  );
}

export default {
  mount: (el: Element | DocumentFragment | null, props: AuthProps) => {
    ReactDOM.render(React.createElement(Auth, props), el);
  },
};

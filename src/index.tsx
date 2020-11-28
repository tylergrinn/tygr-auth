import React from 'react';
import AuthComponent, { AuthProps } from './Auth';
import TygrBoundary from './components/ErrorBoundary';
import useAuthStore, { actions, AuthContext } from './store';

export { useAuthStore, actions, AuthContext };

export default function Auth(props: AuthProps) {
  return (
    <TygrBoundary>
      <AuthComponent {...props} />
    </TygrBoundary>
  );
}

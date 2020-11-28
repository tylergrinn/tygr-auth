import React from 'react';
import AuthComponent, { AuthProps } from './Auth';
import TygrBoundary from './components/ErrorBoundary';
import useAuthStore, { actions, AuthContext as Context } from './store';

export { useAuthStore, actions, Context };

export const Component = (props: AuthProps) => (
  <TygrBoundary>
    <AuthComponent {...props} />
  </TygrBoundary>
);

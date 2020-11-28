import React from 'react';
import Auth, { AuthProps } from './Auth';
import TygrBoundary from './components/ErrorBoundary';
export { actions, AuthContext } from './store';

export default (props: AuthProps) => (
  <TygrBoundary>
    <Auth {...props} />
  </TygrBoundary>
);

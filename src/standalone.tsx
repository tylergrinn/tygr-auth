import React from 'react';
import ReactDOM from 'react-dom';
import Auth, { AuthProps } from './Auth';
import TygrBoundary from './components/ErrorBoundary';

export default {
  mount: (el: Element | DocumentFragment | null, props: AuthProps) => {
    ReactDOM.render(
      React.createElement(TygrBoundary, {}, React.createElement(Auth, props)),
      el
    );
  },
};

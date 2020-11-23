import React from 'react';
import ReactDOM from 'react-dom';
import Auth, { AuthProps } from './Auth';

export default {
  mount: (el: Element | DocumentFragment | null, props: AuthProps) => {
    ReactDOM.render(React.createElement(Auth, props), el);
  },
};

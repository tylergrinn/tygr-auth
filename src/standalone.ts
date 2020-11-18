import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth';

export default {
  mount: (el: Element | DocumentFragment | null) => {
    ReactDOM.render(React.createElement(Auth), el);
  },
};

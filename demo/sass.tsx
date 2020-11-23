import React from 'react';
import ReactDOM from 'react-dom';
import Auth from '../lib';
import './styles/main.scss';

ReactDOM.render(<Auth google twitter github />, document.getElementById('app'));

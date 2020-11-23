import React from 'react';
import ReactDOM from 'react-dom';
import Auth from '../lib';
import '../lib/tygr-auth.min.css';

ReactDOM.render(<Auth google twitter github />, document.getElementById('app'));

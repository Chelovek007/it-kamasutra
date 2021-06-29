import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import SamuraiApp from './App';

ReactDOM.render(<SamuraiApp />, document.getElementById('root'));

serviceWorker.unregister();

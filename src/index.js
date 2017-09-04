import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import StorePicker from './components/StorePicker'

ReactDOM.render(<StorePicker />, document.getElementById('root'));
registerServiceWorker();

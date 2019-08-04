import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import '@material/react-text-field/dist/text-field.css';
import '@material/react-button/dist/button.css';
import '@material/react-linear-progress/dist/linear-progress.css';
import '@material/react-card/dist/card.css';
import '@material/react-icon-button/dist/icon-button.css';
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-layout-grid/dist/layout-grid.css';
import '@material/react-typography/dist/typography.css';

import './style/main.less';
import { getInstance as getStoreInstance } from './store';
import App from './containers/App';

const store = getStoreInstance();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
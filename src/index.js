import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TagManager from 'react-gtm-module';

import './index.css';

import { store } from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const tagManagerArgs = {
  gtmId: 'GTM-57QG7WJ',
};
TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

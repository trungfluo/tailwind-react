// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './styles.css';
import App from './App';

const rootEl = document.getElementById('root');

if (rootEl) {
  const render = Component => {
    const app =
      process.env.NODE_ENV === 'development' ? (
        <AppContainer>
          <Component />
        </AppContainer>
      ) : (
        <Component />
      );
    ReactDOM.render(app, rootEl);
  };

  render(App);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./App.js', () => {
      const NextApp = require('./App').default;
      render(NextApp);
    });
  }
}

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store, history } from './store';
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import './styles/style.styl';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, { tags: { custom_tag: 'value' } }).install();

// logException(new Error('Error!'), { email: 'user@example.com' });

// Raven.captureMessage('Some error');
// Raven.showReportDialog();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));

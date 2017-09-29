import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';
Raven.config(sentry_url).install();

/*
Raven.showReportDialog({eventId: 0);
Raven.captureMessage('Something happened');
*/

/*
 * - Match '/', use Main
 *   - PhotoGrid is child of Main
 *     - Single is child of PhotoGrid
 */
const router = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
);

const provider = (
  <Provider store={store}>
    {router}
  </Provider>
);

render(provider, document.getElementById('root'));

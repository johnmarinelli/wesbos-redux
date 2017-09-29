import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

/*
 * interface between router and store
 */
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

/*
 * root reducer
 */
import rootReducer from './reducers';

import comments from './data/comments';
import posts from './data/posts';

/*
 * application state shape.
 */
const defaultState = {
  posts,
  comments
};

const store = createStore(
  rootReducer, 
  defaultState, 
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const history = syncHistoryWithStore(browserHistory, store);

/*
 * manually hook up reducers to HMR
 */
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;


import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';
import posts from './data/posts';
import comments from './data/comments';

const defaultState = {
  posts,
  comments
};

export const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

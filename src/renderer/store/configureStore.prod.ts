// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducer';
import {AppStateType} from '../reducer/appState';

// import type { counterStateType } from '../reducers/counter';

const history = createBrowserHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: AppStateType) {
    return createStore(rootReducer, initialState, enhancer);
}

export { configureStore, history };
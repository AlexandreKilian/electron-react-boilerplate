import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers';
import { initialState } from '../reducers';

export default function configureStore(history) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                thunk,
                routerMiddleware(history)
            )
        )
    );
}

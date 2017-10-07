import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    router
});

export default rootReducer;

export const initialState = {
};

import { createStore, combineReducers } from 'redux';
import toolsReducer from '../reducers/tools';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            tools: toolsReducer,
            filters: filtersReducer
        })
    );

    return store;
};
import { createStore, combinereducers } from 'redux';
import uuid from 'uuid';





// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'name'
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
        return state;
    }
}

// Store creation

const store = createStore(
    combinereducers({
        tools: toolsReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState);
});

store.dispatch(addTool({ name: 'slack', description: 'collab tool'}));

const demoState = {
    tools: [{
        id: 'jhdjheo',
        name: 'slack',
        websiteUrl: 'slack.com',
        description: 'cloud based collaboration tool',
        imgUrl: 'www.slack.com'
    }],
    filters: {
        text: 'slack',
        sortBy: 'name'
    }
};
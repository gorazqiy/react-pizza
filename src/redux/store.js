import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReduser from './reducers';




// этот reduser был заменен на несколько мелких(импортированы выше) 

// function counter(state = 0, action) {
// 	switch (action.type) {
// 		case 'ДОБАВИТЬ':
// 			return state + 1
// 		case 'ОТНЯТЬ':
// 			return state - 1
// 		default:
// 			return state
// 	}
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReduser, composeEnhancers(applyMiddleware(thunk)));


export default store;
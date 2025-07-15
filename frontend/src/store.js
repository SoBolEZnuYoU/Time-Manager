import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	appReducer,
	projectReducer,
	projectsReducer,
	taskReducer,
	tasksReducer,
	userReducer,
} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	app: appReducer,
	project: projectReducer,
	projects: projectsReducer,
	task: taskReducer,
	tasks: tasksReducer,
	user: userReducer,
});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

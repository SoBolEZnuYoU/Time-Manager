import { ACTION_TYPE } from '../actions';

const initialTasksState = {
	refreshFlag: false,
	tasks: [],
};

export const tasksReducer = (state = initialTasksState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_TASKS_DATA:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.REFRESH_TASKS:
			return {
				...state,
				refreshFlag: !state.refreshFlag,
			};
		default:
			return state;
	}
};

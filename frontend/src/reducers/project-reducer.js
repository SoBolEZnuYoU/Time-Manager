import { ACTION_TYPE } from '../actions';
import { transformProjectTask } from '../utils';

const initialProjectState = {
	id: '',
	title: '',
	comment: '',
	created_at: '',
	amountTasks: '',
	spendTime: 0,
	tasks: [],
};

export const projectReducer = (state = initialProjectState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PROJECT_DATA:
			return {
				...initialProjectState,
				...action.payload,
				tasks: action.payload.tasks.map((task) => transformProjectTask(task)),
			};
		case ACTION_TYPE.SET_PROJECT_TASK_DATA:
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
		case ACTION_TYPE.RESET_PROJECT_DATA:
			return initialProjectState;
		default:
			return state;
	}
};

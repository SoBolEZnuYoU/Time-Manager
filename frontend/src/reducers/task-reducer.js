import { ACTION_TYPE } from '../actions';

const initialTaskState = {
	isOpen: false,
	title: '',
	id: '',
	spendTime: 0,
	createdAt: '',
};

export const taskReducer = (state = initialTaskState, action) => {
	switch (action.type) {
		case ACTION_TYPE.OPEN_TASK:
			return {
				...state,
				isOpen: true,
			};
		case ACTION_TYPE.CLOSE_TASK:
			return {
				...state,
				isOpen: false,
			};
		case ACTION_TYPE.SET_TASK_DATA:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.RESET_TASK_DATA:
			return initialTaskState;
		default:
			return state;
	}
};

import { ACTION_TYPE } from '../action-type';

export const setTaskData = (data) => {
	return {
		type: ACTION_TYPE.SET_TASK_DATA,
		payload: data,
	};
};

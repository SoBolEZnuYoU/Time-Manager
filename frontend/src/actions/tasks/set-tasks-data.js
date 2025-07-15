import { ACTION_TYPE } from '../action-type';

export const setTasksData = (tasks) => {
	return {
		type: ACTION_TYPE.SET_TASKS_DATA,
		payload: tasks,
	};
};

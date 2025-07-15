import { ACTION_TYPE } from '../action-type';

export const setIsRunning = (flag) => {
	return {
		type: ACTION_TYPE.SET_IS_RUNNING,
		payload: flag,
	};
};

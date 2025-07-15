import { ACTION_TYPE } from '../action-type';

export const setMinutes = (minutes) => ({
	type: ACTION_TYPE.SET_MINUTES,
	payload: minutes,
});

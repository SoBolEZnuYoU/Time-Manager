import { ACTION_TYPE } from '../action-type';

export const setSession = (session) => {
	return {
		type: ACTION_TYPE.SET_SESSION,
		payload: session,
	};
};

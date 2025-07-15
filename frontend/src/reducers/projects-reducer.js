import { ACTION_TYPE } from '../actions';

const initialProjectsState = {
	refreshFlag: false,
	projects: [],
	lastPage: 1,
};

export const projectsReducer = (state = initialProjectsState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PROJECTS:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.REFRESH_PROJECTS:
			return {
				...state,
				refreshFlag: !state.refreshFlag,
			};
		default:
			return state;
	}
};

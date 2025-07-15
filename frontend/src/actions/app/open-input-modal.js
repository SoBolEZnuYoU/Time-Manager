import { ACTION_TYPE } from '../action-type';

export const openInputModal = (modalParams) => {
	return {
		type: ACTION_TYPE.OPEN_INPUT_MODAL,
		payload: modalParams,
	};
};

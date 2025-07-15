import { ACTION_TYPE } from '../actions';

const initialAppState = {
	watch: {
		mode: 'stopwatch',
		isRunning: false,
		seconds: 0,
		minutes: 0,
	},
	inputModal: {
		isOpen: false,
		question: '',
		text: '',
		onConfirm: () => {},
		onCancel: () => {},
	},
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.OPEN_INPUT_MODAL:
			return {
				...state,
				inputModal: {
					...state.modal,
					...action.payload,
					isOpen: true,
				},
			};
		case ACTION_TYPE.SET_IS_RUNNING:
			return {
				...state,
				watch: { ...state.watch, isRunning: action.payload },
			};
		case ACTION_TYPE.SET_MINUTES:
			return {
				...state,
				watch: { ...state.watch, minutes: action.payload },
			};
		case ACTION_TYPE.SET_MODE:
			return {
				...state,
				watch: { ...state.watch, mode: action.payload },
			};
		case ACTION_TYPE.SET_SECONDS:
			return {
				...state,
				watch: { ...state.watch, seconds: action.payload },
			};
		case ACTION_TYPE.CLOSE_MODAL:
			return {
				...initialAppState,
			};
		default:
			return state;
	}
};

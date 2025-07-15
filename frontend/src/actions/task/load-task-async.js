import { setTaskData } from './set-task-data';

export const loadTaskAsync = (request, id) => (dispatch) => {
	request(`/api/tasks/${id}`, 'GET').then(({ data }) => {
		if (data) {
			dispatch(setTaskData(data));
		}
	});
};

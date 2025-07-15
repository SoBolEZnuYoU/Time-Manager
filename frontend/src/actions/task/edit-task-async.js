import { refreshTasks } from '../tasks/refresh-tasks';
import { setTaskData } from './set-task-data';

export const editTaskAsync = (request, id, newData) => (dispatch) => {
	request(`/api/tasks/${id}`, 'PATCH', { newData }).then(({ data }) => {
		dispatch(refreshTasks);
		dispatch(setTaskData(data));
	});
};

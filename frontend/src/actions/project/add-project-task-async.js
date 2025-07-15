import { setProjectTaskData } from './set-project-task-data';

export const addProjectTaskAsync = (request, id, title) => (dispatch) => {
	request(`/api/projects/${id}/tasks`, 'POST', { title }).then(({ data }) => {
		dispatch(setProjectTaskData(data));
	});
};

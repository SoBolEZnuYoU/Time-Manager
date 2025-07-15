import { loadProjectAsync } from './load-project-async';

export const removeProjectTaskAsync = (request, projectId, taskId) => (dispatch) => {
	request(`/api/projects/${projectId}/tasks/${taskId}`, 'DELETE').then(() => {
		dispatch(loadProjectAsync(request, projectId));
	});
};

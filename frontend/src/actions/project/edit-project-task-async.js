import { loadProjectAsync } from './load-project-async';

export const editProjectTaskAsync =
	(request, projectId, taskId, newData) => (dispatch) => {
		request(`/api/projects/${projectId}/tasks/${taskId}`, 'PATCH', {
			data: newData,
		}).then(() => {
			dispatch(loadProjectAsync(request, projectId));
		});
	};

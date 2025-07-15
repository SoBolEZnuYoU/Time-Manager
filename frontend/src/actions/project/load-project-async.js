import { setProjectData } from './set-project-data'

export const loadProjectAsync = (request, id) => (dispatch) => {
	return request(`/api/projects/${id}`, 'GET').then(({ data }) => {
		if (data) {
			dispatch(setProjectData(data));
		}
	});
};

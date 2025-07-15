import { setProjectData } from './set-project-data';

export const editProjectAsync = (request, id, newData) => (dispatch) => {
	request(`/api/projects/${id}`, 'PATCH', { newData }).then(({ data }) => {
		dispatch(setProjectData(data));
	});
};

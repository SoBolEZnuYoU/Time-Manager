export const removeProjectAsync = (request, id) => (dispatch) => {
	request(`/api/projects/${id}`, 'DELETE');
};

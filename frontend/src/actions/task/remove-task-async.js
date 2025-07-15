export const removeTaskAsync = (request, id) => () =>
	request(`/api/tasks/${id}`, 'DELETE');

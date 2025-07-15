import { setTasksData } from './set-tasks-data';

export const loadTasksAsync = (request, page, searchPhrase, userId) => (dispatch) => {
	return request(
		`/api/tasks?search=${searchPhrase}&page=${page}&limit=${20}&userId=${userId}`,
		'GET',
	).then(({ data }) => {
		dispatch(setTasksData(data));
	});
};

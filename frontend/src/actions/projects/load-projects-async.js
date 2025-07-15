import { setProjects } from './set-projects';

export const loadProjectsAsync = (request, page, searchPhrase, userId) => (dispatch) => {
	return request(
		`/api/projects?search=${searchPhrase}&page=${page}&limit=${12}&userId=${userId}`,
		'GET',
	).then(({ data }) => {
		dispatch(setProjects(data));
	});
};

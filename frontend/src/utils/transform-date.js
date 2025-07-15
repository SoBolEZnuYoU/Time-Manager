export const transformDate = (date) =>
	new Date(date).toLocaleString('ru', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	});

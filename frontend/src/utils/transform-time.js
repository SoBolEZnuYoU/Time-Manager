export const transformTime = (seconds) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;

	return hours
		? `${hours}ч${minutes}м`
		: minutes
			? `${minutes}м`
			: remainingSeconds
				? `${remainingSeconds}с`
				: '0c';
};

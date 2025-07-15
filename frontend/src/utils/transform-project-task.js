export const transformProjectTask = (task) => ({
	id: task._id,
	title: task.title,
	status: task.status,
	createdAt: task.createdAt,
});

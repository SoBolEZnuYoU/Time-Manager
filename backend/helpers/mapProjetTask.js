module.exports = function (projectTask) {
    return {
        id: projectTask.id,
        title: projectTask.title,
        status: projectTask.status,
        createdAt: projectTask.createdAt,
    };
};

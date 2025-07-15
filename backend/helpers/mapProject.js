module.exports = function (project) {
    return {
        id: project.id,
        title: project.title,
        comment: project.comment,
        spendTime: project.spendTime,
        tasks: project.tasks,
        createdAt: project.createdAt,
    };
};

module.exports = function (task) {
    return {
        id: task.id,
        title: task.title,
        spendTime: task.spendTime,
        createdAt: task.createdAt,
    };
};

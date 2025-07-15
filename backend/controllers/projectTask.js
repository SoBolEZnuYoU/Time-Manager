const ProjectTask = require("../models/ProjectTask");
const Project = require("../models/Project");

async function addProjectTask(projectId, task) {
    const newProjectTask = await ProjectTask.create(task);

    await Project.findByIdAndUpdate(projectId, {
        $push: { tasks: newProjectTask },
    });

    return newProjectTask;
}

async function editProjectTask(taskId, data) {
    const newProjectTask = await ProjectTask.findByIdAndUpdate(taskId, data, {
        returnDocument: "after",
    });

    return newProjectTask;
}

async function deleteProjectTask(projectId, taskId) {
    await ProjectTask.deleteOne({ _id: taskId });
    await Project.findByIdAndUpdate(projectId, {
        $pull: { tasks: taskId },
    });
}

module.exports = {
    addProjectTask,
    editProjectTask,
    deleteProjectTask,
};

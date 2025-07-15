const Project = require("../models/Project");

// add
async function addProject(title, userId) {
    const newProject = await Project.create({ title, userId });

    await newProject.populate("tasks");

    return newProject;
}

// edit
async function editProject(id, data) {
    const newProject = await Project.findByIdAndUpdate(id, data, {
        returnDocument: "after",
    });

    await newProject.populate("tasks");

    return newProject;
}

// delete
function deleteProject(id) {
    return Project.deleteOne({ _id: id });
}

// get list with search
async function getProjects(search = "", limit = 12, page = 1, userId) {
    const [projects, count] = await Promise.all([
        Project.find({ title: { $regex: search, $options: "i" }, userId })
            .limit(limit)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 }),
        Project.countDocuments({ title: { $regex: search, $options: "i" } }),
    ]);

    return {
        projects,
        lastPage: Math.ceil(count / limit),
    };
}

// get item
function getProject(id) {
    return Project.findById(id).populate("tasks");
}

module.exports = {
    addProject,
    editProject,
    deleteProject,
    getProjects,
    getProject,
};

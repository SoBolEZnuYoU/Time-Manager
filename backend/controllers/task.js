const Task = require("../models/Task");

// add
function addTask(title, userId) {
    const newTask = Task.create({ title, userId });

    return newTask;
}

// edit
async function editTask(id, data) {
    const newTask = await Task.findByIdAndUpdate(id, data, {
        returnDocument: "after",
    });

    return newTask;
}

// delete
function deleteTask(id) {
    return Task.deleteOne({ _id: id });
}

// get list with search
async function getTasks(search = "", limit = 25, page = 1, userId) {
    const [tasks, count] = await Promise.all([
        Task.find({ title: { $regex: search, $options: "i" }, userId })
            .limit(limit)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 }),
        Task.countDocuments({ title: { $regex: search, $options: "i" } }),
    ]);

    return {
        tasks,
        lastPage: Math.ceil(count / limit),
    };
}

// get item
function getTask(id) {
    return Task.findById(id);
}

module.exports = {
    addTask,
    editTask,
    deleteTask,
    getTasks,
    getTask,
};

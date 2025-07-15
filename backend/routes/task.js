const express = require("express");
const {
    addTask,
    deleteTask,
    editTask,
    getTask,
    getTasks,
} = require("../controllers/task");
const mapTask = require("../helpers/mapTask");
const authenticated = require("../middlewares/authenticated");

const router = express.Router({ mergeParams: true });

router.get("/", authenticated, async (req, res) => {
    const { tasks, lastPage } = await getTasks(
        req.query.search,
        req.query.limit,
        req.query.page,
        req.query.userId
    );

    res.send({ data: { lastPage, tasks: tasks.map(mapTask) } });
});

router.get("/:id", authenticated, async (req, res) => {
    const task = await getTask(req.params.id);

    res.send({ data: mapTask(task) });
});

router.post("/", authenticated, async (req, res) => {
    const newTask = await addTask(req.body.title, req.body.userId);

    res.send({ data: mapTask(newTask) });
});

router.patch("/:id", authenticated, async (req, res) => {
    const updateTask = await editTask(req.params.id, req.body.newData);

    res.send({ data: mapTask(updateTask) });
});

router.delete("/:id", authenticated, async (req, res) => {
    await deleteTask(req.params.id);

    res.send({ error: null });
});

module.exports = router;

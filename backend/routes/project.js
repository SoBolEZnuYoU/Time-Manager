const express = require("express");
const {
    getProjects,
    getProject,
    addProject,
    editProject,
    deleteProject,
} = require("../controllers/project");
const {
    addProjectTask,
    deleteProjectTask,
    editProjectTask,
} = require("../controllers/projectTask");
const mapProject = require("../helpers/mapProject");
const mapProjectTask = require("../helpers/mapProjetTask");
const authenticated = require("../middlewares/authenticated");

const router = express.Router({ mergeParams: true });

router.get("/", authenticated, async (req, res) => {
    const { projects, lastPage } = await getProjects(
        req.query.search,
        req.query.limit,
        req.query.page,
        req.query.userId
    );

    res.send({ data: { lastPage, projects: projects.map(mapProject) } });
});

router.get("/:id", authenticated, async (req, res) => {
    const project = await getProject(req.params.id);

    res.send({ data: mapProject(project) });
});

router.post("/", authenticated, async (req, res) => {
    const newProject = await addProject(req.body.title, req.body.userId);

    res.send({ data: mapProject(newProject) });
});

router.patch("/:id", authenticated, async (req, res) => {
    const updateProject = await editProject(req.params.id, req.body.newData);

    res.send({ data: mapProject(updateProject) });
});

router.delete("/:id", authenticated, async (req, res) => {
    await deleteProject(req.params.id);

    res.send({ error: null });
});

router.post("/:id/tasks", authenticated, async (req, res) => {
    const newProjectTask = await addProjectTask(req.params.id, {
        title: req.body.title,
        status: false,
    });

    res.send({ data: mapProjectTask(newProjectTask) });
});

router.patch("/:projectId/tasks/:taskId", authenticated, async (req, res) => {
    const newProjectTask = await editProjectTask(
        req.params.taskId,
        req.body.data
    );

    res.send({ data: mapProjectTask(newProjectTask) });
});

router.delete("/:projectId/tasks/:taskId", authenticated, async (req, res) => {
    await deleteProjectTask(req.params.projectId, req.params.taskId);

    res.send({ error: null });
});

module.exports = router;

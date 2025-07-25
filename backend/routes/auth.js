const express = require("express");
const { register, login, editUserRole } = require("../controllers/user");
const mapUser = require("../helpers/mapUser");

const router = express.Router({ mergeParams: true });

router.post("/register", async (req, res) => {
    try {
        const { user, token } = await register(
            req.body.login,
            req.body.password
        );

        res.cookie("token", token, { httpOnly: true }).send({
            error: null,
            user: mapUser(user),
        });
    } catch (e) {
        res.send({ error: e.message || "Unknown error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { user, token } = await login(req.body.login, req.body.password);

        res.cookie("token", token, { httpOnly: true }).send({
            error: null,
            user: mapUser(user),
        });
    } catch (e) {
        res.send({ error: e.message || "Unknown error" });
    }
});

router.post("/logout", async (req, res) => {
    res.cookie("token", "", { httpOnly: true }).send({});
});

router.patch("/user/:id", async (req, res) => {
    const updateUser = await editUserRole(req.params.id, req.body.roleId);

    res.send({ user: mapUser(updateUser) });
});

module.exports = router;

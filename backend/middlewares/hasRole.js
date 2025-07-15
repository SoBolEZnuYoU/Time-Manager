module.exports = function (roles) {
    return (req, res, next) => {
        if (!roles.include(req.user.role)) {
            res.send({ error: "Access danied" });

            return;
        }

        next();
    };
};

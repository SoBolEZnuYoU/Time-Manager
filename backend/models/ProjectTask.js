const mongoose = require("mongoose");

const ProjectTaskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

const ProjectTask = mongoose.model("ProjectTask", ProjectTaskSchema);

module.exports = ProjectTask;

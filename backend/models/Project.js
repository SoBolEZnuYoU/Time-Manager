const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
        },
        spendTime: {
            type: Number,
        },
        tasks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ProjectTask",
            },
        ],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;

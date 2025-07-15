const mongoose = require("mongoose");
const role = require("../constants/role");

const UserSchema = mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: role.USER,
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

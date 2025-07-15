const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generate } = require("../helpers/token");

async function register(login, password) {
    if (!password) {
        throw new Error("Password is empty");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({ login, passwordHash });
    const token = generate({ id: user.id });

    return { user, token };
}

async function login(login, password) {
    const user = await User.findOne({ login });

    if (!user) {
        throw new Error("user not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordMatch) {
        throw new Error("Wrong password");
    }

    const token = generate({ id: user.id });

    return { token, user };
}

async function editUserRole(userId, role) {
    const updateUser = await User.findByIdAndUpdate(
        userId,
        { role },
        {
            returnDocument: "after",
        }
    );

    return updateUser;
}

module.exports = {
    register,
    login,
    editUserRole,
};

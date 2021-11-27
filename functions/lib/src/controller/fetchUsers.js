"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUsers = void 0;
const getAllUsers_1 = require("../database/getAllUsers");
exports.fetchUsers = async (_, res) => {
    const users = await getAllUsers_1.getAllUsers().catch((err) => {
        throw new Error(err);
    });
    return res.status(200).send(users);
};
//# sourceMappingURL=fetchUsers.js.map
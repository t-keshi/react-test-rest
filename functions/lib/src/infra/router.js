"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const fetchProfile_1 = require("../controller/fetchProfile");
const fetchUsers_1 = require("../controller/fetchUsers");
const login_1 = require("../controller/login");
const updateProfile_1 = require("../controller/updateProfile");
exports.router = (app) => {
    app.post('/login', login_1.login);
    app.get('/users', fetchUsers_1.fetchUsers);
    app.get('/profile', fetchProfile_1.fetchProfile);
    app.post('/profile', updateProfile_1.updateProfile);
};
//# sourceMappingURL=router.js.map
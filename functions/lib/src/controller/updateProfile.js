"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = void 0;
const updateUser_1 = require("../database/updateUser");
exports.updateProfile = async (req, res) => {
    var _a, _b, _c, _d;
    const allCookies = (_b = (_a = req.headers.cookie) === null || _a === void 0 ? void 0 : _a.split('; ')) !== null && _b !== void 0 ? _b : undefined;
    const userId = (_d = (_c = allCookies === null || allCookies === void 0 ? void 0 : allCookies.find((row) => row.startsWith('userId='))) === null || _c === void 0 ? void 0 : _c.split('=')[1]) !== null && _d !== void 0 ? _d : undefined;
    if (userId === undefined) {
        return res.status(401).end();
    }
    const { body } = req;
    await updateUser_1.updateUser({
        id: userId,
        name: body.name,
        profile: body.profile,
    }).catch((err) => {
        console.error(err);
        return res.status(500).end();
    });
    return res.status(204).send('');
};
//# sourceMappingURL=updateProfile.js.map
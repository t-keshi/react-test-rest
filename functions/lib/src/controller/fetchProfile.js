"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProfile = void 0;
const getUser_1 = require("../database/getUser");
exports.fetchProfile = async (req, res) => {
    var _a, _b, _c, _d;
    const allCookies = (_b = (_a = req.headers.cookie) === null || _a === void 0 ? void 0 : _a.split('; ')) !== null && _b !== void 0 ? _b : undefined;
    const userId = (_d = (_c = allCookies === null || allCookies === void 0 ? void 0 : allCookies.find((row) => row.startsWith('userId='))) === null || _c === void 0 ? void 0 : _c.split('=')[1]) !== null && _d !== void 0 ? _d : undefined;
    if (userId === undefined) {
        return res.status(401).end();
    }
    const user = await getUser_1.getUser({ userId }).catch((err) => {
        console.error(err);
        return undefined;
    });
    if (user === undefined) {
        return res.status(500).end();
    }
    return res.status(200).send(user);
};
//# sourceMappingURL=fetchProfile.js.map
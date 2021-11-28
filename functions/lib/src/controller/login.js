"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
exports.login = async (_, res) => {
    const oneDayToSeconds = 24 * 60 * 60;
    res.cookie('userId', 'abc-123', {
        maxAge: oneDayToSeconds,
        secure: process.env.NODE_ENV === 'production' ? true : false,
        httpOnly: true,
    });
    return res.status(204).send('');
};
//# sourceMappingURL=login.js.map
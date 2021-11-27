"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const admin = require("firebase-admin");
const user_1 = require("../domain/user");
exports.updateUser = async (variables) => {
    const db = admin.firestore();
    const usersRef = db.collection(user_1.collectionName).doc(variables.id);
    await usersRef.update({
        name: variables.name,
        profile: variables.profile,
    });
};
//# sourceMappingURL=updateUser.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const admin = require("firebase-admin");
const user_1 = require("../domain/user");
exports.getAllUsers = async () => {
    const db = admin.firestore();
    const usersRef = db.collection(user_1.collectionName);
    const querySnapshot = await usersRef.get();
    const users = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const user = {
            id: data.id,
            name: data.id,
            email: data.email,
            profile: data.profile,
        };
        return user;
    });
    return users;
};
//# sourceMappingURL=getAllUsers.js.map
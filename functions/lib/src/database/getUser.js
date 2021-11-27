"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const admin = require("firebase-admin");
const user_1 = require("../domain/user");
exports.getUser = async (variables) => {
    const db = admin.firestore();
    const userRef = db.collection(user_1.collectionName).doc(variables.userId);
    const querySnapshot = await userRef.get();
    const userDoc = querySnapshot.data();
    if (userDoc === undefined) {
        throw new Error('user not found');
    }
    const user = {
        id: userDoc.id,
        name: userDoc.name,
        email: userDoc.email,
        profile: userDoc.profile,
    };
    return user;
};
//# sourceMappingURL=getUser.js.map
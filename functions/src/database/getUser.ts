import admin = require('firebase-admin');
import { collectionName, User } from '../domain/user';

interface GetUserInput {
  userId: string;
}

export const getUser = async (variables: GetUserInput): Promise<User> => {
  const db = admin.firestore();
  const userRef = db.collection(collectionName).doc(variables.userId);
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

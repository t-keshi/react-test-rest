import admin = require('firebase-admin');
import { collectionName, User } from '../domain/user';

export const getAllUsers = async (): Promise<User[]> => {
  const db = admin.firestore();
  const usersRef = db.collection(collectionName);
  const querySnapshot = await usersRef.get();
  const users = querySnapshot.docs.map(
    (doc: FirebaseFirestore.QueryDocumentSnapshot) => {
      const data = doc.data();
      const user: User = {
        id: data.id,
        name: data.id,
        email: data.email,
        profile: data.profile,
      };

      return user;
    },
  );

  return users;
};

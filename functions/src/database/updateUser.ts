import admin = require('firebase-admin');
import { collectionName } from '../domain/user';

interface UpdateUserInput {
  id: string;
  name: string;
  profile: string;
}

export const updateUser = async (variables: UpdateUserInput): Promise<void> => {
  const db = admin.firestore();
  const usersRef = db.collection(collectionName).doc(variables.id);

  await usersRef.update({
    name: variables.name,
    profile: variables.profile,
  });
};

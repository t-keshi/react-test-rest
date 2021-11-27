import express = require('express');
import { getAllUsers } from '../database/getAllUsers';
import { User } from '../domain/user';

export const fetchUsers = async (
  _: express.Request<unknown, User[]>,
  res: express.Response<User[] | Error>,
) => {
  const users = await getAllUsers().catch((err) => {
    throw new Error(err);
  });

  return res.status(200).send(users);
};

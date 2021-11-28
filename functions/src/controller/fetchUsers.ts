import express = require('express');
import { getAllUsers } from '../database/getAllUsers';
import { User } from '../domain/user';

export const fetchUsers = async (
  _: express.Request<unknown, User[]>,
  res: express.Response<User[] | Error>,
) => {
  const users = await getAllUsers().catch((err) => {
    console.error(err);
    return undefined;
  });

  if (users === undefined) {
    return res.status(500).end();
  }

  return res.status(200).send(users);
};

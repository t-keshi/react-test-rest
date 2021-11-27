import express = require('express');
import { getUser } from '../database/getUser';
import { User } from '../domain/user';

export const fetchProfile = async (
  req: express.Request,
  res: express.Response<User | Error>,
) => {
  const allCookies = req.headers.cookie?.split('; ') ?? undefined;
  const userId =
    allCookies?.find((row) => row.startsWith('userId='))?.split('=')[1] ??
    undefined;

  if (userId === undefined) {
    return res.status(401);
  }

  const users = await getUser({ userId }).catch((err) => {
    throw new Error(err);
  });

  return res.status(200).send(users);
};

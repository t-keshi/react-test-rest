import express = require('express');
import { updateUser } from '../database/updateUser';

interface UpdateProfileReq {
  name: string;
  profile: string;
}

export const updateProfile = async (
  req: express.Request<unknown, unknown, UpdateProfileReq>,
  res: express.Response<unknown | Error>,
) => {
  const allCookies = req.headers.cookie?.split('; ') ?? undefined;
  const userId =
    allCookies?.find((row) => row.startsWith('userId='))?.split('=')[1] ??
    undefined;

  if (userId === undefined) {
    return res.status(401).end();
  }

  const { body } = req;
  await updateUser({
    id: userId,
    name: body.name,
    profile: body.profile,
  }).catch((err) => {
    console.error(err);
    return res.status(500).end();
  });

  return res.status(204).send('');
};

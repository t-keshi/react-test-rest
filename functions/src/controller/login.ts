import express = require('express');
import { User } from '../domain/user';

export const login = async (
  _: express.Request<unknown, User[]>,
  res: express.Response<User[] | Error>,
) => {
  const oneDayToSeconds = 24 * 60 * 60;
  res.cookie('userId', 'abc-123', {
    maxAge: oneDayToSeconds,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production' ? true : false,
  });

  return res.status(200);
};

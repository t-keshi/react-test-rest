import express = require('express');

export const login = async (
  _: express.Request<unknown, unknown>,
  res: express.Response<unknown | Error>,
) => {
  const oneDayToSeconds = 24 * 60 * 60;
  res.cookie('userId', 'abc-123', {
    maxAge: oneDayToSeconds,
    secure: process.env.NODE_ENV === 'production' ? true : false,
    httpOnly: true,
  });

  return res.status(204).send('');
};

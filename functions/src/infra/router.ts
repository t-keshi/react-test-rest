import express from 'express';
import { fetchProfile } from '../controller/fetchProfile';
import { fetchUsers } from '../controller/fetchUsers';
import { login } from '../controller/login';
import { updateProfile } from '../controller/updateProfile';

export const router = (app: express.Express): void => {
  app.post('/login', login);
  app.get('/users', fetchUsers);
  app.get('/profile', fetchProfile);
  app.post('/profile', updateProfile);
};

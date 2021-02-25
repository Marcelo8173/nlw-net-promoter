import 'reflect-metadata';
import express, { json } from 'express';
import routes from './routes/index';
import './database/typeorm';

const app = express();
app.use(json());

app.use(routes);

export { app };
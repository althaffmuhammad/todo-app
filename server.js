import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'colors';
import connectToMongoDB from './db/connectToMongoDB.js';
import CrudRoutes from './routes/CrudRoutes.js';
import path from 'path';

dotenv.config ();

const app = express ();

const PORT = process.env.PORT || 5050;

const __dirname = path.resolve ();

connectToMongoDB ();

app.use (cors ());
app.use (express.json ());
app.use (express.static (path.join (__dirname, './client/build')));

app.use ('/api/', CrudRoutes);

app.use ('*', (req, res) => {
  res.sendFile (path.join (__dirname, './client/build/index.html'));
});

app.listen (PORT, console.log (`server is on in ${PORT}`.bgGreen));

'use strict'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';

dotenv.config();

// PORT
const serverPort = process.env.SERVER_PORT;
const serverUrl = process.env.SERVER_URL;
// DB CONFIG
const dbUrl = process.env.DB_URL;
const dbPort = process.env.DB_PORT;
const dbCollection = process.env.DB_COLLECTION;

// MONGODB CONNECTION
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
mongoose.connect(`${dbUrl}:${dbPort}/${dbCollection}`, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Hi!, successfully connected to DATABASE');

		// SERVER SET UP
		app.listen(serverPort, () => {
			console.log(`Server running in: ${serverUrl}:${serverPort}`);
		});
	})
	.catch(err => console.log(err));
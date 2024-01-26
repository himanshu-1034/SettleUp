import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import { MONGO_DB_URL } from './creds/mondodb';
import router from './router';

const PORT = 8080
const app = express();
app.use(cors({
    credentials: true
}))
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());
app.use('/', router());

const server = http.createServer(app);
server.listen(PORT);

mongoose.Promise = Promise;
mongoose.connect(MONGO_DB_URL);
mongoose.connection.on('error', (error: Error) => {
    console.log("MONGO DB ERROR: ", error);
})
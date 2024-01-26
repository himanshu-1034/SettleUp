import express from 'express';
import authentication from './authentication';

const router  = express.Router();

export default function ():express.Router {
    authentication(router);

    return router;
}
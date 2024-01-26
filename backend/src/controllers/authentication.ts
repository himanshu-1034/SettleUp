import express from 'express';
import {createUser, getUserByUserName, getUsersByEmail} from '../db/db-schema';
import { auth, genRandom } from '../helpers/index';

export const register = async (req: express.Request, res: express.Response) => {
    try { 
        const {userName, firstName, password} = req.body;

        if(!userName || !firstName || !password) return res.sendStatus(400);

        const existingUser = await getUserByUserName(userName);

        if(existingUser) {
            return res.sendStatus(400);
        }

        const salt = genRandom();
        const user = await createUser({
            firstName,
            lastName: req?.body?.lastName ?? '',
            userName,
            contact: {
                email: req?.body?.email ?? '',
                ...(req?.body?.mdn && req?.body?.countryCode ? {countryCode: req?.body?.countryCode, mdn: req?.body?.mdn} : {})
            },
            auth: {
                salt,
                password: auth(salt, password)
            }
        })

        return res.status(200).json(user).end();
        
    } catch (err) {
        console.log("ERROR IN REGISTER : ", err);
        return res.sendStatus(400);
    }
}
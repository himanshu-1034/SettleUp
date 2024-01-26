import { register } from "../controllers/authentication";
import express from "express";

export default function (route: express.Router) {
    route.post('/api/reg', register) // for registration of user
}
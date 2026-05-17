import dotenv from 'dotenv';
import { dot } from 'node:test/reporters';

const environment = process.env.ENV || 'qa';

dotenv.config({
    path : `.env.${environment}`
});

export const ENV ={
    BASE_URL :process.env.BASE_URL!,
    USERNAME : process.env.USERNAME!,
    PASSWORD : process.env.PASSWORD!

}
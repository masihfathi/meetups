import express from 'express';
import dbConfig from './config/config.js';
import middlewaresConfig from './config/middlewares.js';
import {MeetupRoutes} from './modules';
const APP = express();
/*
 * connect to db
 */
dbConfig();
/**
 * middlewares to log api's response
 */
middlewaresConfig(APP);
/**
 * create api request
 */
APP.use('/api',[MeetupRoutes]);
/**
 * 
 * @type process.env.PORT|.global.process.env.PORT|Number
 */
const PORT = process.env.PORT || 3000;
/**
 * listen to port
 */
APP.listen(PORT, (err) => {
    err ? console.error(err) : console.log(`App listen to port ${PORT}`);
}
);

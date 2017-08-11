import express from 'express';
import dbConfig from './config/config.js';
const APP = express();
/*
 * connect to db
 */
dbConfig();
const PORT = process.env.PORT || 3000;
APP.listen(PORT, (err) => {
    err ? console.error(err) : console.log(`App listen to port ${PORT}`);
}
);

import express from 'express';
const APP = express();
const PORT = process.env.PORT||3000;
APP.listen(PORT,(err)=>{
  err?console.error(err):console.log(`App listen to port ${PORT}`);
}
)

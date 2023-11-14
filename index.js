const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000;
// const pool = require('./src/configs/database')
const router = require('./src/routes/routes')
require('dotenv').config();
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({limit:"10mb",extended:true,parameterLimit:500000}))
app.use(router)
// pool
app.listen(port, () =>{
    console.log("Server is runing on post",port)
})
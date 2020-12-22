require('dotenv').config();

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


//MY ROUTES


//DB CONNECTION
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true     
    }
).then(() => {
    console.log("DB CONNECTED")
}).catch(() => {
    console.log("DB GOT OOPS")
});

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//MY ROUTES



//PORT
const port = process.env.PORT || 8000;


//STARTING A SERVER
app.listen(port, () => {
    console.log(`App is running at ${port}`);
});

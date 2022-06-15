require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const userRouter = require('./routes/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'assets')))

app.use(userRouter);

mongoose.connect(process.env.MONGODB_URL)
.then(result => {
    app.listen(process.env.PORT || 3000);
})
.catch(err => console.log(err));
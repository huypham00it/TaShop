require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'assets')))

app.use(userRouter);
app.use('/admin', adminRouter);

app.use((req, res) => {
    res.render('error');
})

mongoose.connect(process.env.MONGODB_URL)
.then(result => {
    app.listen(process.env.PORT || 3000);
})
.catch(err => console.log(err));
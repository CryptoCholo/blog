/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
// const bodyParser = require('body-parser');

const authRouter = require('./routes/auth.routes');
const postRouter = require('./routes/posts.routes');
const app = express()

const { connect } =  require('./db');

connect();

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/auth', authRouter)
app.use('/posts', postRouter)


app.get('/', (req, res) => {
   return res.json({message: "Welcome to this blog"})
})



app.listen(process.env.PORT, () => {
    console.log(`app running`)
})

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

//handle undefined routes
app.use((req, res, next) => {
    res.status(404).send({
        message: "Sorry, the requested route does not exist!"
    })
    next()
})

//handle errors
app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        message: "An error occured. ",
        error: err.toString()
    })
})

app.listen(process.env.PORT, () => {
    console.log(`app running`)
})

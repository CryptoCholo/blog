/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
// const bodyParser = require('body-parser');

const authRouter = require('./routes/auth.routes');
const postRouter = require('./routes/posts.routes');
const app = express()

const { connect } =  require('./db')

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/posts', postRouter )
app.use('/', authRouter)


app.get('/', (req, res) => {
    res.json({message: "welcome"})
})

connect(process.env.mongodb);

app.listen(process.env.port, () => {
    console.log(`app running`)
})

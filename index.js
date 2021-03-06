require('dotenv').config()
require('./persistence/db').config()

const express = require('express')
const app = express()

app.use(express.json())

const noteRouter = require('./route/note')
app.use('/', noteRouter)

const authRouter = require('./route/auth').router
app.use('/auth', authRouter)

const aboutRouter = require('./route/about')
app.use('/about', aboutRouter)

app.listen(process.env.PORT)

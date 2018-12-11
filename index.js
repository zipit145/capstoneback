const express = require('express')
const app  = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3003
const queries = require('./queries')
const data = require('./data')
const users = require('./users')

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use('/data', data)
app.use('/users',users)


app.listen(port, () => {
    console.log("running")
})
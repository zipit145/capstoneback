var express = require('express')
var router =  express.Router()
const queries = require('./queries')

router.get('/', (req,res) => {
    queries.readAllUsers().then(data => res.status(200).send({ data }))
})


module.exports = router
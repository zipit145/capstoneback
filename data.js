var express = require('express')
var router =  express.Router()
const queries = require('./queries')

router.get('/', (req,res) => {
    queries.readAllData().then(data => res.status(200).send({ data }))
})
router.get('/:id', (req,res) => {
    queries.readData(req.params.id).then(data => res.status(200).send({ data }))
})
router.post('/', (req,res) => {
    queries.createData(req.body).then(newData => res.status(201).send({ newData }))
})

module.exports = router
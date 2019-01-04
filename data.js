var express = require('express')
var router =  express.Router()
const queries = require('./queries')

router.get('/', (req,res) => {
    queries.readAllData().then(data => res.status(200).send({ data }))
})
router.get('/:id', (req,res) => {
    queries.readData(req.params.id).then(data => res.status(200).send({ data }))
})
router.delete('/:id', (req,res) => {
    queries.deleteMovie(req.params.id).then(data => res.status(202).send({ data }))
})
router.post('/', (req,res) => {
    queries.createData(req.body).then(newData => res.status(201).send({ newData }))
})
router.put('/:id', (req, res) => {
    queries.updateMovie(req.params.id, req.body).then(data => res.status(204).send({ data }))
})



module.exports = router
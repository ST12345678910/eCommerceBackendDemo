const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../models')

// The `/api/tags` endpoint

router.get('/tags', (req, res) => {
  Tag.findAll({ include: [Product] })
    .then(tags => {
      res.json(tags)
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/tags/:id', (req, res) => {
  Tag.findOne({ where: { id: req.params.id }, include: [Product] })
    .then(tag => {
      res.json(tag)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/tags', (req, res) => {
  Tag.create(req.body)
    .then(tag => {
      res.json(tag)
    })
    .catch(err => {
      console.log(err)
    })
})

router.put('/tags/:id', (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } })
    .then(category => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
    })
})

router.delete('/tags/:id', (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
    .then(tag => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router

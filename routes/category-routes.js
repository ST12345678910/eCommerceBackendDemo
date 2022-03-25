const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', (req, res) => {
  Category.findAll({include: [Product]})
  .then(categories => {
    res.json(categories)
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/categories/:id', (req, res) => {
  Category.findOne({where: {id: req.params.id}, include: [Product]})
  .then(category => {
    res.json(category)
  })
    .catch(err => {
      console.log(err)
    })
})

router.post('/categories', (req, res) => {
  Category.create(req.body)
  .then(category => {
    res.json(category)
  })
    .catch(err => {
      console.log(err)
    })
})

router.put('/categories/:id', (req, res) => {
  Category.update(req.body, {where: {id: req.params.id}})
    .then(category => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
    })
})

router.delete('/categories/:id', (req, res) => {
  Category.destroy({where: { id: req.params.id } })
    .then(category => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router

const router = require('express').Router()
const constrollers = require('./controllers')

router.get('/{language}/{word}', constrollers.getDefinitions)

module.exports = router

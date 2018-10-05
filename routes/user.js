const router = require('express').Router()
const Controller = require('../controllers/userController')

router.post('/signinGoolge', Controller.signinGoolge)

module.exports = router
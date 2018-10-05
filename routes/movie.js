const router = require('express').Router()
const Controller = require('../controllers/movieController')


router.post('/translate/in', Controller.translateIndonesia)

router.post('/translate/en', Controller.translateEnglish)

module.exports = router
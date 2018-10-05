const router = require('express').Router()
const routerUser = require('./user')
const routerMovie = require('./movie')
// const routerJikan = require('./jikan')
// const routerRandomAvatar = require('./randomAvatar')
// const routerLastFm = require('./lastFm')

router.use('/users', routerUser)
router.use('/movies', routerMovie)
// router.use('/jikan', routerJikan)
// router.use('/randomAvatar', routerRandomAvatar)
// router.use('/lastFM', routerLastFm)

module.exports = router
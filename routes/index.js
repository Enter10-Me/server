const router = require('express').Router()
const routerUser = require('./user')
// const routerJikan = require('./jikan')
// const routerMovieDb = require('./user')
// const routerRandomAvatar = require('./randomAvatar')
const routerDeezer = require('./deezer')

router.use('/users', routerUser)
// router.use('/jikan', routerJikan)
// router.use('/moviedb', routerMovieDb)
// router.use('/randomAvatar', routerRandomAvatar)
router.use('/deezer', routerDeezer)

module.exports = router
const router  = require('express').Router()
const deezerController = require('../controllers/deezerController')

router.get('/', (req, res) => {
    res.send('ini dari deezer')
})

router.post('/search', deezerController.search)
router.get('/top', deezerController.topArtis)
router.get('/get-song/:artist', deezerController.getSongsFromArtist)

module.exports = router
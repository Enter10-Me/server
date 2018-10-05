const axios = require('axios')
require('dotenv').config()

class DeezerController{

    static search(req,res){
        axios({
            method : 'get',
            // url : `https://api.deezer.com/artist/${req.body.artis}`
            url : `https://api.deezer.com/search?q=${req.body.search}`
        })
        .then(response=> {
            res.status(200).json({
              data : response.data
            })
        })
        .catch(err => {
            res.status(500).json({message : err})
        })

    }
    static topArtis(req, res){
        axios({
            method : 'get',
            url : `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=662e0e90b9cbc1a637fe7d4d1808182d&format=json`
        })
        .then(response => {
            res.status(200).json(response.data)
        })
        .catch(err => {
            res.status(500).json({
                message : err
            })
        })
    }
    static getSongsFromArtist(req, res){
        axios({
            method : 'get',
            url : `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${req.params.artist}&api_key=662e0e90b9cbc1a637fe7d4d1808182d&format=json`
        })
        .then(response => {
            res.status(200).json(response.data)
        })
        .catch(err => {
            res.status(500).json({
                message : err
            })
        })
    }

}

module.exports = DeezerController
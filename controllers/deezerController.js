const axios = require('axios')
require('dotenv').config()

class DeezerController{

    static search(req,res){
        axios({
            method : 'get',
            url : `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${req.params.artist}&api_key=${process.env.API_KEY}&format=json`
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
            url : `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.API_KEY}&format=json`
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
            url : `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${req.params.artist}&api_key=${process.env.API_KEY}&format=json`
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
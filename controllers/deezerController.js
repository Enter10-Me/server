const axios = require('axios')

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
    static topMusic(req, res){
        axios({
            method : 'get',
            url : `https://api.deezer.com/artist/1/top?index=10`
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
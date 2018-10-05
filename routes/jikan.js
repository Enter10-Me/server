const router = require('express').Router()
const request = require('request');

router.get('/anime/:id',(req,res)=>{
    request(
        {
            url : `https://api.jikan.moe/v3/anime/${req.params.id}`,
            json : true,
        },
        function (error, response, body) {
            if(error){
                res.status(400).json({
                    message : 'error getting data'
                })
            }else{
                res.status(200).json(body)
            }
        }  
    );
})

router.get('/',(req,res)=>{
    request(
        {
            url : `https://api.jikan.moe/v3/season/archive`,
            json : true,
        },
        function (error, response, body) {
            if(error){
                res.status(400).json({
                    message : 'error getting data'
                })
            }else{
                res.json(body)
            }
        }  
    );
})

router.get('/:year/:season',(req,res)=>{
    request(
        {
            url : `https://api.jikan.moe/v3/season/${req.params.year}/${req.params.season}`,
            json : true,
        },
        function (error, response, body) {
            if(error){
                res.status(400).json({
                    message : 'error getting data'
                })
            }else{
                res.json(body)
            }
        }  
    );
})




module.exports = router;



/*
list semua anime 
https://api.jikan.moe/v3/season/archive
list anime berdasarkan tahun dan season
https://api.jikan.moe/v3/season/${year}/${season}
*/
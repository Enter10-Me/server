const router = require('express').Router()
const request = require('request');

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

// router.get('/',(req,res)=>{
//     res.send('halo dari jikan')
// })



module.exports = router;



/*
list semua anime 
https://api.jikan.moe/v3/season/archive

list anime berdasarkan tahun dan season

https://api.jikan.moe/v3/season/${year}/${season}

*/
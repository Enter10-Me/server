const router = require('express').Router()
const Controller = require('../controllers/movieController')
const request=require('request')


router.post('/translate/in', Controller.translateIndonesia)

router.post('/translate/en', Controller.translateEnglish)

router.post('/similar',function(req,res){
    var text=req.body.name
    console.log(req.body)
    const options = {
      url: `https://tastedive.com/api/similar?k=321049-Enter10m-VSF63AHX&q=${text}&info=1`,
    };
    request.get(options,(error, response, body)=>{
      if(!error){
        var data=JSON.parse(body)
        res.status(200).json({
          data
        });
      }
      else{
        res.status(500).json({
          msg : error
        });
      }
    });
})


module.exports = router
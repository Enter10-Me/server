const googleTranslate = require('google-translate')('AIzaSyApAXtnGQtwSR3AGtGUxqr_lB192D4gWuE')

module.exports = {

  translateIndonesia (req, res) {
    googleTranslate.translate(req.body.text, 'in', function(err, translation) {
      res.status(200).json({
        message : translation
      })
    });
  },

  translateEnglish (req,res) {
    googleTranslate.translate(req.body.text, 'en', function(err, translation) {
      res.status(200).json({
        message : translation
      })
    });
  }

}
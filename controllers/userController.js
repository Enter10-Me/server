const User = require('../models/user')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const { OAuth2Client } = require('google-auth-library')
const { checkPassword } = require('../helpers')

module.exports = {

  signinGoolge(req, res) {
    const token = req.body.token
    const CLIENT_ID = '196184982638-ld52a4693dest6f343llmd86i85ula1q.apps.googleusercontent.com'

    const client = new OAuth2Client(CLIENT_ID)
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID
      })
      const payload = ticket.getPayload();
      const userid = payload['sub']

      User.findOne({
          email: payload.email
        })
        .then((user) => {
          if (user) {
            let password = user.email + process.env.HASH_GOOGLE_LOGIN
            checkPassword(user.password, password, user.email)
              .then(function () {
                jwt.sign({
                  userId: user._id
                }, process.env.ACCESS_TOKEN, function (err, token) {
                  if (!err) {
                    res.status(200).json({
                      name: user.name,
                      email: user.email,
                      token: token
                    })
                  } else {
                    res.status(500).json({
                      err
                    })
                  }
                })
              })
              .catch((err) => {
                res.status(500).json({
                  message: `email and password didn't match`
                })
              })

          }  else {
            let dataUser = new User({
              name: payload.name,
              email: payload.email,
              password: payload.email + process.env.HASH_GOOGLE_LOGIN
            })

            console.log(dataUser)

            dataUser.save()
              .then((user) => {
                jwt.sign({
                  userId: user._id
                }, process.env.ACCESS_TOKEN, function (err, token) {
                  if (!err) {
                    res.status(200).json({
                      name: user.name,
                      email: user.email,
                      token: token
                    })
                  } else {
                    res.status(500).json({
                      err
                    })
                  }
                })
              })
              .catch((err) => {
                res.status(500).json({
                  err
                })
              })
          }
        })


    }
    verify().catch(console.error);
  }

}
const
  express = require('express'),
  message = require('../controllers/coinone_kakao_alarm.js'),
  router = express.Router()

router.get('/message',message)

module.exports = router

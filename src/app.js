const
  express = require('express'),
  router = require('./routes'),
  app = express()

app.use(router)
app.listen(3000, function(){
  console.log('3000 port open')
})

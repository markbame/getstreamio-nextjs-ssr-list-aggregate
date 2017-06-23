const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const stream = require('getstream')

const key = 'g5858gfymtgj'
const secret = 'waqspfbuy2eyn9gvhgbwvz8gj7nz2798xs95eqesmrfkxs9ehm8hy587avkn9kpd'


app.get('/getstream/:userid', function(req, res, next) {
  const client = stream.connect( key, secret)
  const feed = client.feed('KVFlat', req.params.userid);
  res.send({"user":req.params.userid, "key":key, "token": feed.token})
})

server.listen(3001, '0.0.0.0', function (err, result) {
  if (err)
    return console.log(err)

  console.log('Listening at port 3001')
})

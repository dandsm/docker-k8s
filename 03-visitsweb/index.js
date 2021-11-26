const express = require('express')
const redis = require('redis')
const process = require('process')

const app = express()
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
})
const visits_red = 'visits'

client.set(visits_red, 0)

app.get('/', (req, res) => {
  //process.exit(1)
  client.get(visits_red, (err, visits) => {
    res.send('Number of visits is ' + visits)
    client.set(visits_red, parseInt(visits) + 1)
  })
})

app.listen(8081, () => {
  console.log('Listening on port 8081')
})

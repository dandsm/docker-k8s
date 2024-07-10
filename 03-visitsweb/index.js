import express from 'express'
import redis from 'redis'
import process from 'process'

const app = express()

const client = await redis.createClient({
  url: 'redis://redis-server:6379'
  
}).on('error', err => console.log('Redis Client Error', err))
  .connect()

const visits_red = 'visits'

client.set(visits_red, 0)

app.get('/', async (req, res) => {
  //process.exit(1)
  let visits = parseInt(await client.get(visits_red));
  visits++;
  await client.set(visits_red, visits);
  res.send('Number of visits is ' + visits)
})

app.listen(8081, () => {
  console.log('Listening on port 8081')
})

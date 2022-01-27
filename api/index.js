//express app
const express = require('express')
const app = express()
const port = 3001

const redis = require('redis');
(async () => {
  const client = redis.createClient();

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  // await client.set('key', 'value');
  const value = await client.get('key');
})();


app.get('/jobs', async (req, res) => {
  const client = redis.createClient();
  await client.connect();
    const jobs = await client.get('lever');
    console.log(JSON.parse(jobs.length));


  return res.send(jobs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
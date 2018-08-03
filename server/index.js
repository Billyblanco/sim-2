const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(cors())
app.use(bodyParser.json())

console.log(process.env.CONNECTION_STRING)

massive(process.env.CONNECTION_STRING).then( db => {
  app.set('db', db)
  console.log('CONNECTED TO DATABASE')
}).catch(err => {
  console.log('ERR CONNECTING TO DATABASE', err)
})


app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.addHouse)
app.delete('/api/houses/:id', controller.delete)

const PORT = 5000
app.listen(PORT, () => {
  console.log('HELLO OPERATOR CAN YOU GIVE ME NUMBER:', PORT)
})
require('dotenv').config();
const express = require('express')
const massive = require('massive')
const app = express()
const productCtrl = require('./products_controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))
}).catch(err => {
  console.log(`ERROR: ${err}`)
})

app.get('/api/products', productCtrl.getAll)
app.get('/api/products/:id', productCtrl.getOne)
app.post('/api/products', productCtrl.create)
app.put('/api/products/:id', productCtrl.update)
app.delete('/api/products/:id', productCtrl.delete)

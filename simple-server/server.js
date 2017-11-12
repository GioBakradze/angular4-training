const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const userService = require('./user-service')

app.use(cors())

app.use(bodyParser.json())

app.get('/users', (req, res) => {
    res.send(userService.all())
})

app.post('/users', (req, res) => {
    userService.add(req.body)
    res.send({msg: 'created'}).status(201)
})

app.listen(3000, () => console.log('API is listening at 3000'))

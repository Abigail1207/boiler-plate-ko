const express = require('express')
const app = express()
const port = 3000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://abiSim:<abcd1234>@boilerplate.fhe5wq0.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hellow World!'))
app.listen(port,() => console.log(`Example app listening on port ${port}!`))

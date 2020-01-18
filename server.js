const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()
/**
 * CONFIG
 */
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@datacluster-my6rl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Database Connection stablished');
})
.catch(err => {
    console.error('Error connecting to mongo', err);
})


app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hola')
})


const UserRoutes = require('./routes/userRoutes')
app.use('/users', UserRoutes)

app.listen(3000, () => {
    console.log('API Runnning')
    console.log('http://localhost:3000/')
})
const express = require('express')
const app = express()
const port = process.env.PORT || 5001;

const chef = require('./data/chef.json');

app.get('/', (req, res) => {
    res.send('Dragon is running')
})


app.get('/chef', (req,res) => {
    res.send(chef)
})

app.listen(port, ()=> {
    console.log(`The API is running on port: ${port}`);
})
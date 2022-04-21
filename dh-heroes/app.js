const express = require('express')
const app = express()
const port = 3000
const path = require('path')
// views
const views = path.join(__dirname, 'views/')
// html
const heroes = 'heroes.html'
// http routes
const httpHeroes = '/heroes'

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get(httpHeroes, (req, res) => {
    res.sendFile(path.join(views, heroes))
    //res.sendFile(__dirname + '/heroes.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(__dirname)
})
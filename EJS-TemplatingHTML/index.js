const express = require('express')
const app = express()
const PORT = 3000

// Come with Express
const path = require('path')
const redditData = require('./data.json')

app.use(express.static(__dirname + '/public'))

// Express require ejs for us
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)


app.get('/', (req, res)=>{
    // renders a view, and send the html to the client
    res.render('home')
})

app.get('/rand', (req, res)=>{
    let randNum = Math.round(Math.random() * 100)
    const params = {
        randNum,
    }
    res.render('random', params)
})

app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params
    const data = redditData[subreddit]

    if(! data)
        res.render('notFound', {subreddit})

    res.render('subreddit', {...data})
})

app.get('/cats', (req, res)=>{
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston']

    res.render('cat', {cats})
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
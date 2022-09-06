const express = require('express')
const app = express()

// All request coming in will run this function
// app.use((req, res)=>{
//     console.log("hello")
//     // res.send("Hello, we got your request.")
//     res.send({color: 'red'})
// })

app.get('/cats', (req, res) => {
    res.send("meow")
})

app.get('/dogs', (req, res) => {
    res.send("woof")
})

app.get('/', (req, res) => {
    res.send("Welcome to  my server")
})

// Define a path with a pattern
// We don't want to manually change the code here as the website grows

app.get('/r/:subreddit', (req, res) => {
    res.send(`Hey, respond to ${req.params.subreddit}`)
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params
    res.send(`Hey, respond to ${subreddit}, postID ${postID}`)
})

app.post('/', (req, res) => {
    res.send('hello, you want post but NOT allowed')
})

app.listen(8000, () => {
    console.log('Listening on port 8000')
})


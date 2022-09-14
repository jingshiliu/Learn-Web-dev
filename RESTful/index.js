const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/t/:hello', (req, res)=>{
    // params is the :hello variable
    console.log(req.params)
    res.send(req.query)
})

app.get('/tacos', (req, res)=>{
    res.send('Taco response')
})

app.post('/tacos', (req, res)=>{
    const {meat, meatQuantity}  = req.body
    let response = {
        data: `Here is your ${meatQuantity} ${meat}, and the total price is ${meatQuantity * 10}`
    }
    res.send(response)
})

app.listen(3000, ()=>{
    console.log("Server running...")
})



// GET /comments - list all comments
// POST /comments - create a new Comment
// GET /comments/:id - get one comment (using id)
// DELETE /comments/:id - delete one comment (using id)
// PATCH /comments/:id - modify one comment
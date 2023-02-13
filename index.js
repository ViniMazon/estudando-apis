const express = require('express')

const app = express()

app.listen('3000')

GET
app.route('/').get( (req,res)=> res.send("Hello"))

middleware
app.use(express.json())

POST
app.route('/').post((req,res) => res.send(req.body))

middleware
app.use(express.json())

PUT
let author = "Vinicius"
app.route('/').put( (req,res) => {
    author = req.body.author
    res.send(author)
})

DELETE
app.route('/:id').delete((req,res) => {
    res.send(req.params.id)
})

app.route('/').get (( req, res) => {

    axios.get('https://api.github.com/users/ViniMazon')
    .then(result => res.send(result.data))
    .catch(error => console.error(error))
})


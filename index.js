const express = require('express')
const hbs  = require('express-handlebars');


const port = 3000

const app = express()
app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

app.engine('.hbs', hbs({extname: '.hbs', defaultLayout:'main'}))
app.set('view engine', '.hbs')

app.use(express.static(__dirname+'/public'))

app.get('/:name',(req, res)=>{
	res.render('index',{
        name: req.params.name
    })
})

app.post('/', (req, res) => {
    res.send(
        `Your name is ${req.body.name}
        Your age is ${req.body.age}
        `)
})

app.post('/this-is-my-post-route', (req, res) => {
    res.json(req.body)
})








app.listen(port, () => console.log(`app listening on port ${port}!`))
const express = require('express')
const app = express()
const urllib = require('urllib')

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function(request, response) {
    response.send("OK")
})
let recipes = []
urllib.request(`https://recipes-goodness.herokuapp.com/recipes/{:ingredient}`, function(err, res) { //
    let recipesObj = JSON.parse(res)

    app.get('/recipes/:ingredient', function(request, response) {
        response.send(recipesObj);

    })
})
const port = 8080
app.listen(port, function() {
    console.log(`Node server created at port ${port}`)
        // console.log(path.join(__dirname, 'dist'));
})
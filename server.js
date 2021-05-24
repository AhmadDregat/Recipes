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
app.get('/recipes/:ingredient', function(request, response) {
    let param = request.params.ingredient
    recipes.splice(0, recipes.length) //rest the array 


    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/` + (param), function(err, res) { //
        let recipesObj = JSON.parse(res)
        for (const R of recipesObj.results) {
            recipes.push({
                title: R.title,
                thumbnail: R.thumbnail,
                ingredients: R.ingredients,
                href: R.ingredients.href
            })
        }
        response.send(recipes)
    })
})

const port = 8080
app.listen(port, function() {
    console.log(`Node server created at port ${port}`)

})
$('button').on('click', function() {
    let input = $('#ingredientinput').val()
    $.get(`/recipes/${input}`, function(recipes) {
        renderrecipes(recipes)

    })

})
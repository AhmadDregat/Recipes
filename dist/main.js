$('button').on('click', function() {
        let input = $('#ingredientinput').val()
        $.get(`/recipes/${input}`, function(recipes) {
            renderrecipes(recipes)

        })

    })
    // $(".image").on('click', function() {
    //     alert(" " + recipes[0]);
    // });
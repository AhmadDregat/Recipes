const renderrecipes = function(recipes) {
    let source = $("#recipestemplate").html()
    const template = Handlebars.compile(source);
    $(".recipesdetails").empty();
    let newHtml = template({ recipes });
    $(".recipesdetails").append(newHtml);
}
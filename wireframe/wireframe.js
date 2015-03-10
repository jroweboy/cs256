document.getElementById("add_recipe").onclick = function(elem) {
    var plus = elem.target;
    var newnode = document.createElement("li");
    newnode.innerHTML = "Recipe Name";
    newnode.class = "tab";
    plus.parentElement.insertBefore(newnode, plus);
}


var tab;

document.addEventListener("DOMContentLoaded", function(event) {
    tab = document.getElementById("add_recipe").previousSibling.clone(true);
    document.getElementById("add_recipe").onclick = function(elem) {
        var plus = elem.target;
        var newnode = tab.clone(true);
        plus.parentElement.insertBefore(newnode, plus);
    }
});

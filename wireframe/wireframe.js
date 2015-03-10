
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("add_recipe").onclick = function(elem) {
        var plus = elem.target;
        var newnode = document.createElement("li");
        newnode.innerHTML = "Recipe Name <span class=\"hide_if_multiple\">[x]</span></li>";
        newnode.className = "tab";
        plus.parentElement.insertBefore(newnode, plus);
    }
    document.querySelectorAll('#tabs>ul>li>span').onclick = function(elem) {
        document.getElementById("#tabs").getElementsByTagName("ul")[0].removeNode(elem.target.parentElement);
    }
});

window.onload = function () {
    var h4 = document.createElement("h4");
    h4.textContent = "something";
    console.log(document.body);
    document.body.appendChild(h4);
    var h3 = document.createElement("h3");
    h3.textContent = "something3";
    document.body.appendChild(h3)
}
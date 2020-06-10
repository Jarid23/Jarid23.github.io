$(function () {
    var bar = '';
    bar += '<nav class="navbar navbar-default" role="navigation">';
    bar += '<div class="container-fluid">';
    bar += '<div>';
    bar += '<ul class="nav navbar-nav">';
    bar += '<li id="home"><a href="HTMLPage1.html">Home</a></li>';
    bar += '<li id="index2"><a href="index2.html">Index 2</a></li>';
    bar += '<li id="index3"><a href="index3.html">Index 3</a></li>';
    bar += '<li id="index4"><a href="index4.html">Index 4</a></li>';
    bar += '<li id="index5"><a href="index5.html">Index 5</a></li>';
    bar += '</ul>';
    bar += '</div>';
    bar += '</div>';
    bar += '</nav>';

    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}


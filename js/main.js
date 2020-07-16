$(document).ready(function() {
    var titleX=$("#h1");
    var title=$("h1");
    console.log(titleX);
    title.animate({
        fontSize: "5rem"
    });

    var navSize = $("nav").offset();
    console.log(navSize);

});
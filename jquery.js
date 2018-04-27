$(document).ready(function() {

    $("#switchOn").click(function() {
        $("#bulbImage").attr("src", "img/bulbon.gif");
    });
    
    $("#switchOff").click(function() {
        $("#bulbImage").attr("src", "img/bulboff.gif");
    });

});

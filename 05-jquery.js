$(document).ready(function() {

    $("#switch01").click(function() {
        if(this.img.src == "img/switch_off.png"){
        $("#switch01").attr("src", "img/switch_on.png");
        }else{
         $("#switch01").attr("src", "img/switch_off.png");   
        }
    });
    
});

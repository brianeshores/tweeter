$(document).ready(function() {
    console.log("document ready");
    $("#tweet-text").keyup(function(){
        if($(this).val().length > 140) {
            $(".counter").text(140 - ($(this).val().length));
            $(".counter").css("color", "red");
        } else {
        $(".counter").text(140 - ($(this).val().length));
        $(".counter").css("color", "black");
        }
    });
});
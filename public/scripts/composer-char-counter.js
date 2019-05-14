$(document).ready(function() {
    console.log("document ready");
    $("#tweet-text").keyup(function(){
        $(".counter").text(140 - ($(this).val().length));
        console.log(".this.text: ", $(this).val())
        if($(this).val().length > 140) {
            $(".counter").css("color", "red");
        }
    }); 
    $("#tweet-container").hover(function() {
        $("#tweet-container").css("border", "black solid 3px");
    },  function (){ 
        $("#tweet-container").css("border", "black solid 1px");
    })
});
$(document).ready(function() {
    $(".tweet-container").hover(function() {
        $(".tweet-container").css("border", "black solid 3px");
    },  function (){ 
        $(".tweet-container").css("border", "black solid 1px");
    });
});
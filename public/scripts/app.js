

  
 //  define and append header elements
function createTweetElement(tweetObj) {
    var $tweetHeader = $("<header>").addClass("tweet-header");
    
    var $tweetAvatar = $("<img>").attr("id", "tweet-avatar");
    $tweetAvatar.attr("src", tweetObj["user"].avatars.small);
    
    var $tweetName = $("<p>").addClass("tweet-name");
    $tweetName.text(tweetObj["user"].name);

    var $tweetHandle = $("<p>").addClass("tweet-handle");
    $tweetHandle.text(tweetObj["user"].handle);

    $tweetHeader.append($tweetAvatar).append($tweetName).append($tweetHandle);

// define and append footer elements
    var $tweetFooter = $("<footer>").addClass("tweet-footer");

    var $tweetDate = $("<p>").attr("id", "tweet-date");
    $tweetDate.text(tweetObj.created_at);

    $tweetFooter.append($tweetDate);


// define and append body elements
    var $tweetBody = $("<p>").addClass("tweet-body");
    $tweetBody.text(tweetObj.content.text);

// append all tweet elements
 
    var $tweetElement = $("<article>").addClass("tweet");
    $tweetElement.append($tweetHeader).append($tweetBody).append($tweetFooter);
    return $tweetElement;
}   

function renderTweets(tweetArr) {
    tweetArr.forEach(function(element){
    var $tweetObj = createTweetElement(element);
    $(".tweet-container").prepend($tweetObj);
    });
}


function loadTweets() {
  $.getJSON("/tweets", function(data){
  renderTweets(data);
  });
}

//This submits a tweet with some validation that shows error messages if constraints aren't met
$(document).ready(function() {
    $("#error-message").hide();
    const $submitTweet = $("#tweet-form");
    $submitTweet.submit(function (event){
        event.preventDefault();
        $(".error-message").hide(200);
        if($("#tweet-text").val().length === 0) {  
          $("#error-empty").show(200);
            $("#error-em")
        } else if($("#tweet-text").val().length > 140) {
          $("#error-long").show(200);
        } else { 
          $("#error-message").hide(200);
          $.ajax("/tweets/", {method: "POST", data: $("#tweet-form").serialize(), success: function(response) {
          $(".tweet-container").empty();
          loadTweets();
          }});
        };
    });
    loadTweets();
});



  

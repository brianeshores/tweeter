

  
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

  var $tweetDate = $("<p>").attr("class", "tweet-date");
  $tweetDate.text(displayTime(tweetObj.created_at));

  var $likeButton = $("<img>").attr("class", "links");
  $likeButton.attr("src", "/images/Heart.png");

  var $reTweet = $("<img>").attr("class", "links");
  $reTweet.attr("src", "/images/retweet.png");

  var $flag = $("<img>").attr("class", "links");
  $flag.attr("src", "/images/flag.png");
  
  $tweetFooter.append($tweetDate).append($likeButton).append($reTweet).append($flag);


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



function displayTime(timeInMs) {
  var date = new Date();
  var diff = date.getTime() - timeInMs;
  const submitTimeSec = (diff/1000);
  if (submitTimeSec < 60) { 
    return '< 1 min'
  } else if (submitTimeSec < 3600) {
    return '< 1 hour'
  } else if (submitTimeSec > 3600 && submitTimeSec < 86400) {  
    return ` ${Math.ceil(submitTimeSec/3600)} hours`
  } else if (submitTimeSec > 86400 && submitTimeSec < 2592000) {
    return ` ${Math.ceil(submitTimeSec/86400)} days`;
  } else {
    return '> 1 month'
  }
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
      $("#tweet-text").val("");
      $("#tweet-form .counter").text('140');
      loadTweets();
      }});
    };
  });
  loadTweets();
});



  

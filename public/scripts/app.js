/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  
 //  define and append header elements
function createTweetElement(tweetObj) {
    var $tweetHeader = $("<header>").addClass("tweet-header");
    
    var $tweetAvatar = $("<img>").addClass("tweet-avatar");
    $tweetAvatar.attr("src", tweetObj["user"].avatars.small);
    
    var $tweetName = $("<p>").addClass("tweet-name");
    $tweetName.text(tweetObj["user"].name);

    var $tweetHandle = $("<p>").addClass("tweet-handle");
    $tweetHandle.text(tweetObj["user"].handle);

    $tweetHeader.append($tweetAvatar).append($tweetName).append($tweetHandle);
    console.log("header:  ", $tweetHeader);

// *********************************************************************************
// define and append footer elements
    var $tweetFooter = $("<footer>").addClass("tweet-footer");

    var $tweetDate = $("<p>").addClass("tweet-date");
    $tweetDate.text(tweetObj.created_at);

    $tweetFooter.append($tweetDate);

// *********************************************************************************
// define and append body elements
    var $tweetBody = $("<p>").addClass("tweet-body");
    $tweetBody.text(tweetObj.content.text);

// *********************************************************************************
// append all tweet elements
 
    var $tweetElement = $("<article>").addClass("tweet");
    $tweetElement.append($tweetHeader).append($tweetBody).append($tweetFooter);

    console.log("tweet element: ", $tweetElement);
    return $tweetElement;
}   

function renderTweets(tweetArr) {
    tweetArr.forEach(function(element){
    var $tweetObj = createTweetElement(element);
    $(".tweet-container").append($tweetObj);
    });
}

$(document).ready(function() {
renderTweets(data);
});



  

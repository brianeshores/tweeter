"use strict";

// Simulates the kind of delay we see with network or filesystem operations


// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet, (err, result) => {
        callback(err, result);
      })
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
        db.collection("tweets").find().toArray((err, result) => {
          callback(err, result);
        });
    }
  }
}


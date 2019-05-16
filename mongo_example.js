"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URL = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URL, (err, db) =>{
    if (err) {
        console.error(`Failed to connect: ${MONGODB_URL}`);
        throw err;
    }

    console.log(`Connected to mongodb: ${MONGODB_URL}`);

    db.collection("tweets").find().toArray((err, results) => {
        if (err) throw err;
    
        console.log("results array: ", results);
          });
    db.close();
});
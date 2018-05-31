console.log("Hello World");

var Twitter = require('twitter');
var config = require('./config');

var T = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
});
//postTweet(); uncomment to test tweet
function postTweet()
{
    var n = Math.floor(Math.random() * 100);
    var tweet = {
        status: 'Hello World ' + n
    }
    T.post('statuses/update', tweet, callback );

    function callback(error, data, response) {
        if(error) console.log(error);
        else console.log("posted!")
        //    console.log(data);  // Tweet body.
        //console.log(response);  // Raw response object. 
        }
}
console.log("I am inside the js");

/*let url = ["https://fsd1.herokuapp.com/users/1/details", "https://fsd1.herokuapp.com/users/1/media",
    "https://fsd1.herokuapp.com/users/1/followers/suggestions", "https://fsd1.herokuapp.com/users/1/following/tweets",
    "https://fsd1.herokuapp.com/users/1/tweets",
    "https://fsd1.herokuapp.com/users/1/following",
    "https://fsd1.herokuapp.com/users/1/followers",
];
*/
let urlDetails = "https://fsd1.herokuapp.com/users/1/details";
let urlMedia = "https://fsd1.herokuapp.com/users/1/media";
let urlSuggestions = "https://fsd1.herokuapp.com/users/1/followers/suggestions";
let urlTweets = "https://fsd1.herokuapp.com/users/1/tweets";
let urlfollowing = "https://fsd1.herokuapp.com/users/1/following";
let urlFollowers = "https://fsd1.herokuapp.com/users/1/followers";


/*=========================================================================================================*/
/* Update the user profile dataisl */
let promiseDetails = fetch(urlDetails);
/*promiseDetails.then(response => response.json())
    .then(data => updateProfileDetaisl(data.data));*/


/*promiseDetails.then(res => res.json()).then(data =>{
        var div = document.querySelector(".username");
        console.log(data.data.user_name);
        console.log(data.data.user_email);
        console.log(div);
        div.innerText = data.data.user_name;
        var div1 = document.querySelector(".userid");
        console.log(div1);
        div1.innnerText = data.data.user_email;
        })*/

promiseDetails.then(res => res.json()).then(data => {
    var div = document.querySelector(".username");
    console.log(data.data.user_name);
    console.log(data.data.user_email);
    console.log(div);
    div.innerText = data.data.user_name;
    var div1 = document.querySelector(".right .userid");
    console.log(div1);
    div1.innnerText = data.data.user_email;
    document.querySelector(".box:nth-of-type(1) p:nth-of-type(2)").innerText = data.data.stats.tweets;
    document.querySelector(".box:nth-of-type(2) p:nth-of-type(2)").innerText = data.data.stats.followers;
    document.querySelector(".box:nth-of-type(3) p:nth-of-type(2)").innerText = data.data.stats.following;
})

function updateProfileDetaisl(data) {
    var div = document.querySelector(".username");
    console.log(data.data.user_name);
    console.log(data.data.user_email);
    console.log(div);
    div.innerText = data.data.user_name;
    var div1 = document.querySelector(".userid");
    console.log(div1);
    div1.innnerText = data.data.user_email;
    document.querySelector(".box:nth-of-type(1) p:nth-of-type(2)").innerText = data.data.stats.tweets;
    document.querySelector(".box:nth-of-type(2) p:nth-of-type(2)").innerText = data.data.stats.followers;
    document.querySelector(".box:nth-of-type(3) p:nth-of-type(2)").innerText = data.data.stats.following;
}

/*============================================================================================================*/

let promiseSuggestions = fetch(urlSuggestions);

promiseSuggestions.then(res => res.json()).then(data => updateSuggestions(data.data));

function updateSuggestions(data) {
    /*updating the suggestion */
    /*Select the first element*/
    var div = document.querySelector(".user .user-details .userid");
    div.innerText = data[0].user_email;;
    var div = document.querySelector(".user .user-details .username");
    div.innerText = data[0].user_name;
    var div = document.querySelector(".user .user-details .user-avatar");
    /*var img = document.createElement("img");
      img.src =*/
    /*Select the second elements*/
    var div = document.querySelector(".user:nth-of-type(2) .user-details .userid");
    div.innerText = data[1].user_email;
    var div = document.querySelector(".user:nth-of-type(2) .user-details .username");
    div.innerText = data[1].user_name;
    var div = document.querySelector(".user:nth-of-type(2) .user-details .user-avatar");
    /*Selcting the third elements*/
    var div = document.querySelector(".user:nth-of-type(3) .user-details .userid");
    div.innerText = data[2].user_email;
    var div = document.querySelector(".user:nth-of-type(3) .user-details .username");
    div.innerText = data[2].user_name;
    var div = document.querySelector(".user:nth-of-type(3) .user-details .user-avatar");

    /*var userdiv = document.querySelector(".follow-body");
    var newdiv = document.createElement("user");
    var newdiv1 = userdiv.appendChild(newdiv);
    newdiv1.appendChild(".user")*/
}

/*============================================================================================================*/
let promiseTweets = fetch(urlTweets);

promiseTweets.then(res => res.json()).then(data => updateTweets(data.data));

function updateTweets(data) {
    /*Updating the comment header*/
    var div = document.querySelector(".row1:nth-of-type(2) .comment-header .box span:nth-of-type(1)");
    div.innerText = data[0].user.full_name;
    var div = document.querySelector(".row1:nth-of-type(2) .comment-header .box span:nth-of-type(2)");
    div.innerText = data[0].user.user_email;
    var div = document.querySelector(".row1:nth-of-type(2) .comment-header .box span:nth-of-type(3)");
    var currentTime = Date();
    var tweetTime = Date(1555500072050);
    console.log(currentTime);
    console.log(tweetTime);
    div.innerText = "10hr";

    /*Updating the commnet-body*/
    var div = document.querySelector(".row1:nth-of-type(2) .comment-body p");
    div.innerText = data[0].text;
    /*Updating the comment-footer*/
    var div = document.querySelector(".row1:nth-of-type(2) .comment-footer div:nth-of-type(1) span");
    div.innerText = data[0].stats.comments;
    var div = document.querySelector(".row1:nth-of-type(2) .comment-footer div:nth-of-type(2) span");
    div.innerText = data[0].stats.retweets;
    var div = document.querySelector(".row1:nth-of-type(2) .comment-footer div:nth-of-type(3) span");
    div.innerText = data[0].stats.likes;
    /*-------------------------------------------------------------------------------------------------------------*/
    /*Updating the comment header*/
    var div = document.querySelector(".row1:nth-of-type(3) .comment-header .box span:nth-of-type(1)");
    div.innerText = data[0].user.full_name;
    var div = document.querySelector(".row1:nth-of-type(3) .comment-header .box span:nth-of-type(2)");
    div.innerText = data[0].user.user_email;
    var div = document.querySelector(".row1:nth-of-type(3) .comment-header .box span:nth-of-type(3)");
    var currentTime = Date();
    var tweetTime = Date(1555500072050);
    console.log(currentTime);
    console.log(tweetTime);
    div.innerText = "10hr";

    /*Updating the commnet-body*/
    var div = document.querySelector(".row1:nth-of-type(3) .comment-body p");
    div.innerText = data[0].text;
    /*Updating the comment-footer*/
    var div = document.querySelector(".row1:nth-of-type(3) .comment-footer div:nth-of-type(1) span");
    div.innerText = data[0].stats.comments;
    var div = document.querySelector(".row1:nth-of-type(3) .comment-footer div:nth-of-type(2) span");
    div.innerText = data[0].stats.retweets;
    var div = document.querySelector(".row1:nth-of-type(3) .comment-footer div:nth-of-type(3) span");
    div.innerText = data[0].stats.likes;
    /*------------------------------------------------------------------------------------------------------------------*/
    var div = document.querySelector(".row1:nth-of-type(4) .comment-header .box span:nth-of-type(1)");
    div.innerText = data[0].user.full_name;
    var div = document.querySelector(".row1:nth-of-type(4) .comment-header .box span:nth-of-type(2)");
    div.innerText = data[0].user.user_email;
    var div = document.querySelector(".row1:nth-of-type(4) .comment-header .box span:nth-of-type(3)");
    var currentTime = Date();
    var tweetTime = Date(1555500072050);
    console.log(currentTime);
    console.log(tweetTime);
    div.innerText = "10hr";

    /*Updating the commnet-body*/
    var div = document.querySelector(".row1:nth-of-type(4) .comment-body p");
    div.innerText = data[0].text;
    var div = document.querySelector(".row1:nth-of-type(4) .comment-body img:nth-of-type(1)");
    console.log(data[0].entities.media[0].link);
    //div.src = data[0].entities.media[0].url;
    var div = document.querySelector(".row1:nth-of-type(4) .comment-body video:nth-of-type(1)");
    console.log(data[0].entities.media[0].link);
    div.src = data[0].entities.media[0].link;
    /*Updating the comment-footer*/
    var div = document.querySelector(".row1:nth-of-type(4) .comment-footer div:nth-of-type(1) span");
    div.innerText = data[0].stats.comments;
    var div = document.querySelector(".row1:nth-of-type(3) .comment-footer div:nth-of-type(2) span");
    div.innerText = data[0].stats.retweets;
    var div = document.querySelector(".row1:nth-of-type(4) .comment-footer div:nth-of-type(3) span");
    div.innerText = data[0].stats.likes;
    /*-------------------------------------------------------------------------------------------------------------*/

}
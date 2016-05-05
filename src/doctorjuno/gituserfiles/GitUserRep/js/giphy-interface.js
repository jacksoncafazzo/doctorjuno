var gifUrl = "";
var smallGifUrl = "";
var catGifUrls = [];
var gifCount = 0;

exports.getRandomGif = function() {
$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').then(function(gifReturn) {
  gifUrl = gifReturn.data.image_url;
  $(".gif-of-the-moment").append('<img src="'+ gifUrl +'" alt="random gif">');
}).fail(function(error) {
  alert("oh sheet mang no return");
});
//console.log("after the get" + gifUrl);
return gifUrl;
};

exports.getSmallCatGif = function() {

$.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC').then(function(smallGifReturn) {
  console.log(smallGifReturn);
  smallGifUrl = smallGifReturn.data[gifCount].images.fixed_height.url;
  $(".repo-gifs").append('<li><img src="'+ smallGifReturn.data[gifCount].images.fixed_height.url +'" alt="random cat gif"></li>'
  );

console.log(smallGifReturn.data[gifCount].images.fixed_height.url);

}).fail(function(error) {
  console.log(error);
});

gifCount =+ 1;

};

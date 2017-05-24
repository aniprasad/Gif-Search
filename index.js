$(document).ready(function() {
  $("#random").addClass("active");
});

var PUBLIC_KEY = 'dc6zaTOxFJmzC';
var BASE_URL = 'http://api.giphy.com/v1/gifs/';
var ENDPOINT = 'search';
var LIMIT = 1;
var RATING = 'pg';

var $queryInput = $('.query');
var $resultWrapper = $('.result');
var $loader = $('.loader');
var $inputWrapper = $('.input-wrapper');
var $clear = $('.clear');
var $button = $('#random');
var currentTimeout;

function randomButtonClick() {
  //alert("Hello");
  console.log("Sdfsd");
  var url = "http://api.giphy.com/v1/gifs/";
  var query = $('#query').val();
  console.log(query);
  var offset = Math.floor(Math.random() * 25);
  url = url + "search?q=" + query + "&limit=1&offset=" + offset +"&api_key=" + PUBLIC_KEY;
  // console.log(url);
  $.ajax({
    url: url,
    dataType: 'json',
    success: function(data) {
      var gifUrl = data.data[0].images.downsized.url;
      console.log(gifUrl);
      $("#gifresult").attr("src", gifUrl);
    }
  });
}

function buildImg(src, classes = 'gif hidden') {
  return "<img src=" + src + " class=" + classes + " alt=gif />";
}
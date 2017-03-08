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

// var query = {
//   text: null,
//   offset: 0,
//   request() {
//     return `${BASE_URL}${ENDPOINT}?q=${this.text}&limit=${LIMIT}&rating=${RATING}&offset=${this.offset}&api_key=${PUBLIC_KEY}`;
//   },
//   fetch(callback) {
//     $.getJSON(this.request())
//       .success(data => {
//         let results = data.data;
        
//         if (results.length) {
//           let url = results[0].images.downsized.url;
//           console.log(results);
//           callback(url);
//         } else {
//           callback('');
//         }
//       })
//       .fail(error => {
//         console.log(error);
//       });
//   }
// }


function buildImg(src, classes = 'gif hidden') {
  return "<img src=" + src + " class=" + classes + " alt=gif />";
}

// $clear.on('click', e => {
//   $queryInput.val('');
//   $inputWrapper.removeClass('active').addClass('empty');
//   $('.gif').addClass('hidden');
//   $loader.removeClass('done');
//   $button.removeClass('active');
// });

// $button.on('click', e => {
//   query.offset = Math.floor(Math.random() * 25);
  
//   query.fetch(url => {
//     if (url.length) {
//       $resultWrapper.html(buildImg(url));

//       $button.addClass('active');
//     } else {
//       $resultWrapper.html(`<p class="no-results hidden">No Results found for <strong>${query.text}</strong></p>`);

//       $button.removeClass('active');
//     }

//     $loader.addClass('done');
//     currentTimeout = setTimeout(() => {
//       $('.hidden').toggleClass('hidden');
//     }, 1000);
//   });
// });

// $queryInput.on('keyup', e => {
//   let key = e.which || e.keyCode;
//   query.text = $queryInput.val();
//   query.offset = Math.floor(Math.random() * 25);
  
//   if (currentTimeout) {
//     clearTimeout(currentTimeout);
//     $loader.removeClass('done');
//   }
  
//   currentTimeout = setTimeout(() => {
//     currentTimeout = null;
//     $('.gif').addClass('hidden');
    
//     if (query.text && query.text.length) {
//       $inputWrapper.addClass('active').removeClass('empty');
      
//       query.fetch(url => {
//         if (url.length) {
//           $resultWrapper.html(buildImg(url));
          
//           $button.addClass('active');
//         } else {
//           $resultWrapper.html(`<p class="no-results hidden">No Results found for <strong>${query.text}</strong></p>`);
          
//           $button.removeClass('active');
//         }
        
//         $loader.addClass('done');
//         currentTimeout = setTimeout(() => {
//           $('.hidden').toggleClass('hidden');
//         }, 1000);
//       });
//     } else {
//       $inputWrapper.removeClass('active').addClass('empty');
//       $button.removeClass('active');
//     }
//   }, 1000);
// });
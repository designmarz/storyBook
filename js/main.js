$(document).ready(function() {

var book = $('.book');
var chapters = $('.chapter-list');


for (var i = 0; i < chapters.length; i++) {
	console.log(chapters[i]);
}


// function for menu icon to slide up hidden area //
$( ".navbar-menu" ).click(function() {
  $( ".navbar" ).animate({
    // opacity: 0.25,
    // left: "+=50",
    bottom: "+=200"
  }, 500, function() {
    // Animation complete.
  });
});

	console.log(book);
  	console.log("Doc Ready");
});
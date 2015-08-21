$(document).ready(function() {
/*jslint vars: true, plusplus: true, jquery: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
// /*global define */
var book = $('.book');
var chapters = $('.chapter-list');
// var size = [];




// navbar menu slide up/down //
$(".navbar-menu").click(function(){
        $(".navbar").toggleClass("visible", 500);
    });



// debugging area, to be removed //

	for (var i = 0; i < chapters.length; i++) {
		console.log(chapters[i]);
	}

	console.log(book);
  	console.log("Doc Ready");

// debugging area, to be removed //
});
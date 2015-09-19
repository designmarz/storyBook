$(document).ready(function() {
/*jslint vars: true, plusplus: true, jquery: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
// /*global define */
var book = $('.book');
var chapters = $('.chapter-list');
// var size = [];
var height = $('.navbar-hidden').css('height');

$("<style>").prop("type", "text/css").html(".visible { bottom: " + height + ";}").appendTo("head");

// navbar menu slide up/down //
$(".navbar-menu").click(function(){
		// console.log($('.visible'));

        $(".navbar").toggleClass('visible', 500);
    });


$(".navbar-hidden").click(function(){
		// console.log($('.visible'));

        $(".navbar").toggleClass('visible', 500);
    });


// $(".navbar-menu").click(function(){
// 	$('.visible2').css('bottom', $('.navbar-hidden').css('height'));
//     });


// debugging area, to be removed //

	for (var i = 0; i < chapters.length; i++) {
		console.log(chapters[i]);
	}
	// console.log($('.visible').css('bottom'));
	console.log(book);
  	console.log("Doc Ready");
// debugging area, to be removed //
});
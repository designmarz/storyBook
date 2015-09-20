$(document).ready(function() {
/*jslint vars: true, plusplus: true, jquery: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
// /*global define */
 book = $('.book');
 chapters = $('.chapter-list');
 pages = $('.page');
 list = []
 size = $('.chapter-list').length;
 height = $('.navbar-hidden').css('height');

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

// Chapter Section
$('.navbar-counter').text("Chapter " + size);



// debugging area, to be removed //
	console.log("------------------------------");
	for (var i = 0; i < chapters.length; i++) {
		console.log(chapters[i]);
	}
	console.log("------------------------------");

	for (var i = 0; i < pages.length; i++) {
		var remove = pages[i].outerHTML.length - 5;
		console.log(pages[i]);
		console.log(remove);
		list.push(
		pages[i].outerHTML.slice(17,remove)
		);
		console.log(list);
	}
	console.log("------------------------------");
	// console.log($('.visible').css('bottom'));
	console.log("Book: ");
	console.log(book);
	console.log("Chapters: ");
	console.log(chapters);
	console.log("Pages: ");
	console.log(pages);
	console.log("------------------------------");
  	console.log("Doc Ready");
// debugging area, to be removed //
});
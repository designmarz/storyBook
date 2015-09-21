$(document).ready(function() {
/*jslint vars: true, plusplus: true, jquery: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
// /*global define */
 book = $('.book');
 chapters = $('.chapter-list');
 pages = $('.page');
 list = []
 whichView = 0;
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

// Build list of images
for (var i = 0; i < pages.length; i++) {
	// figure out the length need to grab the whole file path
	// well need to re-write this when I change to adding a setup page
	// or upload section
	var remove = pages[i].outerHTML.length - 5;
		list.push(
		pages[i].outerHTML.slice(17,remove)
		);
		// console.log(list);
	}



$('#prev-button').on({
    'click': function(){
    	whichView -= 1
        $('#book-img').attr('src',list[whichView]);
        console.log(whichView);
        console.log(list[whichView]);
    }
});

$('#next-button').on({
    'click': function(){
    	whichView += 1
        $('#book-img').attr('src',list[whichView]);
        console.log(whichView);
        console.log(list[whichView]);
    }
});

$('#book-img').attr('src',list[whichView]);

// debugging area, to be removed //
	// console.log("------------------------------");
	// for (var i = 0; i < chapters.length; i++) {
	// 	console.log(chapters[i]);
	// }
	// console.log("------------------------------");

	
	// console.log("------------------------------");
	// // console.log($('.visible').css('bottom'));
	// console.log("Book: ");
	// console.log(book);
	// console.log("Chapters: ");
	// console.log(chapters);
	// console.log("Pages: ");
	// console.log(pages);
	// console.log("------------------------------");
  	console.log("Doc Ready");
// debugging area, to be removed //
});
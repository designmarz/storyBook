/*jslint vars: true, plusplus: true, jquery: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
$(document).ready(function() {
// var testJSONData = $.getJSON( "data/story_array.json");

$.getJSON( "data/story_array.json", function( data ) {
	/*jshint loopfunc: true */
	console.log(data.book);
	var chapterPages = []; 
	var chapterStory = [];
	var chapterTop 	 = [];
	var chapterLeft  = [];
		for (var i = 0; i < data.book.length; i++) {
			 var t = 0; // t keeps track of the page, resets to 0 on exit form loop.
			 			// Future: start page on 1 and not 0
		// needed to start a new ul 
			chapterPages.push( "<ul class='chapter-list' id='chapter_"+(i+1)+"'>" );
		


				$.each( data.book[i], function( key, val ) {
		    		chapterPages.push( "<li class='page'>img/" + val.image_path + "</li>" );
		  			chapterStory.push( "<p class='page-desc' id='page_desc_" + (i+1) + "-"+t+"'>" + val.page_desc + "</p>" );
		  			chapterTop.push(val.top);
		  			chapterLeft.push(val.left);
		  			t++;
		  		});
		

				 chapterPages.push( "</ul>" );
		// needed to end a new ul 
			t = 0;
		}
			var bookImageString = "";
			for (var k = 0; k < chapterPages.length; k++) {
				bookImageString+=chapterPages[k];
			}

			var bookStoryString = "";
			for (var q = 0; q < chapterStory.length; q++) {
				bookStoryString+=chapterStory[q];
			}

$( ".book" ).append(bookImageString);
$( ".page-stories" ).append(bookStoryString);

var chapters = $('.chapter-list');
var pages = $('.page');

list_builder(pages);
setup_buttons();
	
intSetup();

});

console.log("// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //");

// /*global define */
 var book = $('.book');
 var chapters = $('.chapter-list');
 var pages = $('.page');
 var list = [];
 var whichView = 0;

 // var size = $('.chapter-list').length;
var	height = function() {
		return $('.navbar-hidden').css('height');

	};

// var setHeight = function() {
// 	return $('.navbar-hidden').animate({ height: height()}, 200, function() {});
// };

 // var height = $('.navbar-hidden').css('height');

// needed to set css for visible // needed to set css for visible //
	// HACK HACK HACK HACK HACK HACK HACK HACK HACK //
// $('<style>').prop('type', 'text/css').html('.visible { bottom: ' + height() + ';}').appendTo('head');
	// HACK HACK HACK HACK HACK HACK HACK HACK HACK //

var setStyle = function() {
	// $('.navbar').animate({ height: height()}, 200, function() {});
	$('<style>').prop('type', 'text/css').html('.visible { bottom: ' + height() + ';}').appendTo('head');
};

// needed to set css for visible // needed to set css for visible //

// navbar menu slide up/down //
$('.navbar-menu').click(function(){
    $('.navbar').toggleClass('visible', 500);
    });
$('.navbar-hidden').click(function(){
    $('.navbar').toggleClass('visible', 500);
    });

// navbar menu slide up/down //




// update UI
var nav_counter_update = function(pos) {
	$('.navbar-counter').text("Chapter: " + pos);
};
// update UI


// Chapter Section

// Build list of images //
function list_builder(pages) {
	for (var y = 0; y < pages.length; y++) {
		// figure out the length need to grab the whole file path
		// well need to re-write this when I change to adding a setup page
		// or upload section
		var remove = pages[y].outerHTML.length - 5;
			list.push(
			pages[y].outerHTML.slice(17,remove)

			);
		}

	}
// Build list of images //


// Build section for changing description text //

var chapter_desc_update = function(pos) {
	var textUpdate = '#page_desc_' + pos;
	$('.page-desc').hide();
	$(textUpdate).show();
	height();
	setStyle();
};

// Build section for changing description text //
// Plan on re-writing this for both buttons in one function //
// with the ability to 

// <----------------------- Chapter display navigation controls ----------------------->
var setup_buttons = function() {
	$('#prev_button').click(function(){
	// Need to add if check so coutnters can't
	// go past the number of pages and chapters

	    	// Controls which page img we are on //
	    	whichView -= 1;
	    	// allows us to use slice to pass to the 
	    	// chapter display function
			var location = list[whichView];
	// This changes the img src of the book-view image
	        $('#book_img').attr('src',list[whichView]);
	       // passes current location to the nav update function
	        nav_counter_update(location.slice(4,7));
	        chapter_desc_update(location.slice(4,7));
	        // touch_icon_update(whichView);
	    }
	);
	$('#next_button').click(function(){
	// Need to add if check so counters can't
	// go past the number of pages and chapters

	    	// Controls whic page img we are one //
	    whichView += 1;
	    	// allows us to use slice to pass to the 
	    	// chapter display function
			var location = list[whichView];
		// This changes the img src of the book-view image
	        $('#book_img').attr('src',list[whichView]);
	     // passes current location to the nav update function
	     	nav_counter_update(location.slice(4,7));
	     	chapter_desc_update(location.slice(4,7));
	     	// touch_icon_update(whichView);
	    }
		);
};
// <----------------------- Chapter display navigation controls ----------------------->

// Set the first image
// Future: Add defualt image view(possibly allow some way to set a logo?)

var intSetup = function() {
	// list_builder();
	$('#book_img').attr('src',list[whichView]);
	nav_counter_update(list[whichView].slice(4,7));
};




// console.log(" ");
// debugging area, to be removed ------------------------------------------//
// debugging area, to be removed ------------------------------------------//
// debugging area, to be removed ------------------------------------------//
console.log("vvvvvvv > Start debugging area");
// console.log("
//       ,_      _,
//         '.__.'
//    '-,   (__)   ,-'
//      '._ .::. _.'
//        _'(^^)'_
//     _,` `>\/<` `,_
//    `  ,-` )( `-,  `
//       |  /==\  |
//     ,-'  |=-|  '-,
//          )-=(
//          \__/
// ");
	
// console.log(pulseStyle);
	// console.log("------------------------------");
	// for (var i = 0; i < chapters.length; i++) {
	// 	console.log(chapters[i]);
	// }
	// console.log("------------------------------");

	
	// console.log("------------------------------");
	// // console.log($('.visible').css('bottom'));
	console.log("Book: ");
	console.log(book);
	console.log("Chapters: ");
	console.log(chapters);
	// console.log("Pages: ");
	// console.log(pages);
	// console.log("------------------------------");
  	

console.log("^^^^^^^ > End debugging area");
// debugging area, to be removed ------------------------------------------//
// debugging area, to be removed ------------------------------------------//
// debugging area, to be removed ------------------------------------------//
// console.log(" ");

// setStyle();

// < ------- < HACK < ------- < //
function buttonClick() {
	$('#next_button').click();
	$('#prev_button').click();
}

setTimeout(buttonClick, 10);
// > ------- > HACK > ------- > //

// intSetup();
console.log('Doc Ready');

});
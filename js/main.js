$(document).ready(function() {
/*jslint vars: true, plusplus: true, jquery: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

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
$('<style>').prop('type', 'text/css').html('.visible { bottom: ' + height() + ';}').appendTo('head');
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
for (var i = 0; i < pages.length; i++) {
	// figure out the length need to grab the whole file path
	// well need to re-write this when I change to adding a setup page
	// or upload section
	var remove = pages[i].outerHTML.length - 5;
		list.push(
		pages[i].outerHTML.slice(17,remove)
		);
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

// Chapter display navigation controls ----------------------->
$('#prev_button').click(function(){
// Need to add if check so coutnters can't
// go past the number of pages and chapters

    	// Controls whic page img we are one //
    	whichView -= 1;
    	// allows us to use slice to pass to the 
    	// chapter display function
		var location = list[whichView];
// This changes the img src of the book-view image
        $('#book_img').attr('src',list[whichView]);
        


        // console.log(whichView + " " + list[whichView]);
       // passes current location to the nav update function
        nav_counter_update(location.slice(4,7));
        chapter_desc_update(location.slice(4,7));
    }
);

$('#next_button').click(function(){
// Need to add if check so coutnters can't
// go past the number of pages and chapters

    	// Controls whic page img we are one //
    	whichView += 1;
    	// allows us to use slice to pass to the 
    	// chapter display function
		var location = list[whichView];
// This changes the img src of the book-view image
        $('#book_img').attr('src',list[whichView]);
     	


     	// console.log(whichView + " " + list[whichView]);
     // passes current location to the nav update function
     	nav_counter_update(location.slice(4,7));
     	chapter_desc_update(location.slice(4,7));
    }
);
// Chapter display navigation controls ----------------------->

// Set the first image
// Future: Add defualt image view(possibly allow some way to set a logo?)
$('#book_img').attr('src',list[whichView]);
nav_counter_update(list[whichView].slice(4,7));


// Touch icon controls ----------------------->

// var bookWidth = $("#book_img").css("width");
// var bookHeight = $("#book_img").css("height");


// $("#icon_holder").css("width", bookWidth);
// $("#icon_holder").css("height", bookHeight);

var bookW = $("#book_img").css("width");
var screenW = screen.width;
parseInt(screenW, 10);
parseInt(bookW, 10);

// This places the icon at the edge of the image by calculating the posistion
// var viewLeft = (parseInt(screenW, 10) - parseInt(bookW, 10)) / 2;

// -------------------------- //
// Need to do a conversion form px to Screen % to keep posistioning consistent //
//
//
// -------------------------- //

var pulseIcon = $( "#pulsh_icon" );

// Makes  icon draggable by user, need to absrtact and turn in to a function to create a edit mode
pulseIcon.draggable({
  containment: "parent"
});

// var pulseStyleSetDefualt = 
// pulseIcon.attr("style", "left: "+(viewLeft+10)+"px; top: 10px;");

pulseIcon.attr("style", "left: 15%; top: 1%;");

var pulseStyle = pulseIcon.attr("style");


$("body").change(function() {
	pulseStyle = pulseIcon.attr("style");
	console.log(pulseIcon.attr("style"));
	console.log("Body Change");
});

pulseIcon.change(function() {
	pulseStyle = pulseIcon.attr("style");
	console.log(pulseStyle);
	console.log("Icon Change");
});
console.log(pulseIcon);


// Touch icon controls ----------------------->

// console.log(" ");
// debugging area, to be removed ------------------------------------------//
// debugging area, to be removed ------------------------------------------//
// debugging area, to be removed ------------------------------------------//
console.log("vvvvvvv > Start debugging area");

	
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


console.log('Doc Ready');
});
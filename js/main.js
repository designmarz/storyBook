$(document).ready(function() {
/*jslint vars: true, plusplus: true, jquery: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //
// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //
// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //
// console.log("// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //");

// console.log($.getJSON( "data/story_array.json"));

testJSONData = $.getJSON( "data/story_array.json");



$.getJSON( "data/story_array.json", function( data ) {
	console.log(data.book);
	var chapterPages = []; 
	var chapterStory = [];	

		// for (var i = 0; i < data.book.length; i++) {
		// 	for (var j = 0; j < 5 ; j++) {
		// 		var key = data.book[i][j].image_path;
		// 		chapterPages.push( "<li class='page'>" + key + "</li>" );
		// 		var val = data.book[i][j].page_desc;
		// 		chapterStory.push( "<p class='page-desc' id='page_desc_"+(i+1)+"-"+j+"'>" + val + "</p>" );
		// 		console.log("---------------------------");
		// 	}

		// }


		for (var i = 0; i < data.book.length; i++) {

			chapterPages.push( "<ul class='chapter-list' id='chapter_"+(i+1)+"'>" );
			// for (var j = 0; j < 5 ; j++) {
				// var key = data.book[i][j].image_path;
				// var val = data.book[i][j].page_desc;
				
				// chapterPages.push( "<li class='page'>" + key + "</li>" );
				
				// chapterStory.push( "<p class='page-desc' id='page_desc_"+(i+1)+"-"+j+"'>" + val + "</p>" );
				console.log("---------------------------");


				 $.each( data.book[i], function( key, val ) {
		    		chapterPages.push( "<li class='page'>img/" + val.image_path + "</li>" );
		  			chapterStory.push( "<p class='page-desc' id='page_desc_" + i + "-0'>" + val.page_desc + "</p>" );
		  		});
				 chapterPages.push( "</ul>" );
			// }

		}


			// <ul class="chapter-list" id="chapter_1">
			// 	<li class="page">img/1-0.jpg</li>
			// 	<li class="page">img/1-1.jpg</li>
			// 	<li class="page">img/1-2.jpg</li>
			// 	<li class="page">img/1-3.jpg</li>
			// </ul>



// <li class='page'>img/1-0.jpg</li>
// <li class="page">img/1-0.jpg</li>
// <p class="page-desc" id="page_desc_1-3">
// <p class='page-desc' id='page_desc_1-0'>Lorem ipsu…olor sit amet, consectetur adipisicing elit..</p>
		

		// console.log("// Page images loop//");

		  // $.each( data.book, function( key, val ) {
		  //   chapterPages.push( "<li 'class='page' id='" + key + "'>" + val + "</li>" );
		    
		  // });

		// console.log("// Page stories loop//");

		  // $.each( data.book, function( key, val ) {
		  // 	// <p class='page-desc' id='page_desc_1-0'>
		  //   chapterStory.push( "<p class='page-desc' id='" + key + "'>" + val + "</p>" );
		    
		  // });
// need to create anoth each to grab all chapters

console.log("// Page images//");
  console.log(chapterPages);
console.log("// Page stories//");
  console.log(chapterStory);
  console.log("// End new JSON //");
});


 // ____________________

// $.getJSON( "data/story.json", function( data ) {
// 	// testData = data;
// 	var chapterPages = []; 
// 	var chapterStory = [];	
// // need to create another eachLoop grab all chapters, will need to modify code a little for that move //
// 		console.log("// Page images loop OLD OLD//");
// 		  $.each( data.book.chapter1.pages, function( key, val ) {
// 		    chapterPages.push( "<li 'class='page' id='" + key + "'>" + val + "</li>" );
// 		    // smoke test //
// 		    // console.log("Key: " + key + " Value: " + val);
		    
// 		  });

// 		console.log("// Page stories loop OLD OLD//");
// 		  $.each( data.book.chapter1.stories, function( key, val ) {
// 		  	// <p class='page-desc' id='page_desc_1-0'>
// 		    chapterStory.push( "<p class='page-desc' id='" + key + "'>" + val + "</p>" );
// 		    // smoke test //
// 		    // console.log("Key: " + key + " Value: " + val);
		    
// 		  });
// // need to create anoth each to grab all chapters

// console.log("// Page images OLD OLD//");
//   console.log(chapterPages);
// console.log("// Page stories OLD OLD//");
//   console.log(chapterStory);
  
//   // console.log(data);

// });


console.log("// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //");
// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //
// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //
// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //


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

var bookW = parseInt($("#book_img").css("width"), 10);
var screenW = parseInt(screen.width, 10);


// This places the icon at the edge of the image by calculating the posistion
var viewLeft = (screenW - bookW) / 2;
// console.log(viewLeft);

// -------------------------- //
// Need to do a conversion form px to Screen % to keep posistioning consistent //
//
//
// -------------------------- //

var pulseIcon = $( "#pulse_icon" );
// var iconHolder = $("#icon_holder");

// Makes  icon draggable by user, need to absrtact and turn in to a function to create a edit mode
pulseIcon.draggable({
  // containment: "parent"
  containment: "#book_img", scroll: false
});

// iconHolder.draggable({
  // containment: "parent"
// });

// var pulseStyleSetDefualt = 
// iconHolder.attr("style", "left: "+(viewLeft+30)+"px; top: 10px;");
pulseIcon.attr("style", "left: "+(viewLeft+30)+"px; top: 10px;");
// pulseIcon.attr("style", "left: 15%; top: 1%;");

var pulseStyle = pulseIcon.attr("style");

$("#body").change(function() {
	pulseStyle = pulseIcon.attr("style");
	console.log(pulseIcon.attr("style"));
	console.log("Body Change");
});

pulseIcon.change(function() {
	pulseStyle = pulseIcon.attr("style");
	console.log(pulseStyle);
	console.log("Icon Change");
});
// console.log(pulseIcon);


// Touch icon controls ----------------------->

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


console.log('Doc Ready');
});
/*jslint vars: true, plusplus: true, jquery: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
$(document).ready(function() {

// touch icon settings //

// var set_icon_style = function() {
// 	// body...
// };


// var touch_icon_update = function() {
// 	// body...
// };




// touch icon save settings //





// Touch icon controls -----------------------> Touch icon controls -----------------------> Touch icon controls ----------------------->

var bookW = parseInt($("#book_img").css("width"), 10);
var screenW = parseInt(screen.width, 10);

// This places the icon at the edge of the image by calculating the posistion
var viewLeft = (screenW - bookW) / 2;

// -------------------------------- //
// Need to do a conversion from px  //
// to screen % to keep posistioning //
// consistent						//
// -------------------------------- //

var pulseIcon = $( "#pulse_icon" );
// var iconHolder = $("#icon_holder");


// Makes  icon draggable by user, need to absrtact and turn in to a function to create a edit mode
pulseIcon.draggable({
  containment: "#book_img", scroll: false
});

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
console.log(pulseIcon);


// Touch icon controls -----------------------> Touch icon controls -----------------------> Touch icon controls ----------------------->
console.log('Icon Ready');
});
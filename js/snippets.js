/*jslint vars: true, plusplus: true, jquery: true, devel: true, nomen: true, indent: 4, maxerr: 50 */


// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //
// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //
// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //
console.log("// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //");

// $.getJSON( "data/story.json", function( data ) {
// 	console.log("getJSON");
// console.log(data.chapters);
// });

$.getJSON( "data/story.json", function( data ) {
	console.log("getJSON");
	console.log(data.chapters);
	// var dataLength = Object.keys(data).length;
	var dataChapters = Object.keys(data.chapters).length;
	var items = []; 
  $.each( data.chapters, function( key, val ) {
  	// creates an array of image paths formated in li html //
    items.push( "<li id='" + key + "'class='page'>" + val + "</li>" );

    // smoke test //
    console.log("Key: " + key + " Value: " + val);
    
  	});
  console.log(items);
  console.log(dataChapters);
});

console.log("// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //");
// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //
// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //
// DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA * DATA AREA //
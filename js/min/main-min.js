$(document).ready(function(){function o(){$("#next_button").click(),$("#prev_button").click()}var e=$(".book"),t=$(".chapter-list"),n=$(".page"),c=[],l=0,a=function(){return $(".navbar-hidden").css("height")};$("<style>").prop("type","text/css").html(".visible { bottom: "+a()+";}").appendTo("head");var s=function(){$("<style>").prop("type","text/css").html(".visible { bottom: "+a()+";}").appendTo("head")};$(".navbar-menu").click(function(){$(".navbar").toggleClass("visible",500)}),$(".navbar-hidden").click(function(){$(".navbar").toggleClass("visible",500)});for(var r=function(o){$(".navbar-counter").text("Chapter: "+o)},i=0;i<n.length;i++){var g=n[i].outerHTML.length-5;c.push(n[i].outerHTML.slice(17,g))}var v=function(o){var e="#page_desc_"+o;$(".page-desc").hide(),$(e).show(),a(),s()};$("#prev_button").click(function(){l-=1;var o=c[l];$("#book_img").attr("src",c[l]),r(o.slice(4,7)),v(o.slice(4,7))}),$("#next_button").click(function(){l+=1;var o=c[l];$("#book_img").attr("src",c[l]),r(o.slice(4,7)),v(o.slice(4,7))}),$("#book_img").attr("src",c[l]),r(c[l].slice(4,7));var u=parseInt($("#book_img").css("width"),10),b=parseInt(screen.width,10),p=(b-u)/2;console.log(p);var d=$("#pulse_icon");d.draggable({containment:"#book_img",scroll:!1}),d.attr("style","left: "+(p+30)+"px; top: 10px;");var h=d.attr("style");$("#body").change(function(){h=d.attr("style"),console.log(d.attr("style")),console.log("Body Change")}),d.change(function(){h=d.attr("style"),console.log(h),console.log("Icon Change")}),console.log(d),console.log("vvvvvvv > Start debugging area"),console.log("Book: "),console.log(e),console.log("Chapters: "),console.log(t),console.log("^^^^^^^ > End debugging area"),setTimeout(o,10),console.log("Doc Ready")});
$(document).ready(function(){var o=parseInt($("#book_img").css("width"),10),t=parseInt(screen.width,10),e=(t-o)/2,n=$("#pulse_icon");n.draggable({containment:"#book_img",scroll:!1}),n.attr("style","left: "+(e+30)+"px; top: 10px;");var l=n.attr("style");$("#body").change(function(){l=n.attr("style"),console.log(n.attr("style")),console.log("Body Change")}),n.change(function(){l=n.attr("style"),console.log(l),console.log("Icon Change")}),console.log(n)});
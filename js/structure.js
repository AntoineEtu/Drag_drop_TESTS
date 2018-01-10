define([ "jquery", "plugins/jquery.panzoom" ], function( $ ) {
  $(document).ready(function() {
    $(".panzoom-elements").panzoom();
  });
});


$(document).ready(function () {
	$(".panzoom-elements").panzoom();

	// Pass options
	$("a.panzoom-elements").panzoom({
	  minScale: 0,
	  $zoomRange: $("input[type='range']")
	});
});
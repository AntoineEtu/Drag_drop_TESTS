$(document).ready(function () {
	$elem = $(".panzoom-elements").panzoom();

	// Pass options
	$("a.panzoom-elements").panzoom({
	  minScale: 0,
	  $zoomRange: $("input[type='range']")
	});
	// Several options at once
	$elem.panzoom("option", {
	  increment: 0.4,
	  minScale: 0.1,
	  maxScale: 2,
	  duration: 500,
	  $reset: $("a.reset-panzoom, button.reset-panzoom")
	});
});


$(document).ready(function () {
	$elem = $(".panzoom-elements");
	
	var panzoom = $elem.panzoom('instance');
	var options = $elem.panzoom('option');
	$elem.panzoom('option', {
		duration: 500,
		easing: 'linear'
	});
});


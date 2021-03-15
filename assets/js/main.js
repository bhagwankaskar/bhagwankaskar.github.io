/*
	Shree Ganesh Enterprises js setup
*/

(function ($) {

	var $window = $(window),
		$body = $('body');


	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		setTimeout(function() {
			$('#ctn-preloader').addClass('loaded');
			// Una vez haya terminado el preloader aparezca el scroll
			$('body').removeClass('no-scroll-y');
		
			if ($('#ctn-preloader').hasClass('loaded')) {
			  // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
			  $('#page-wrapper').delay(1000).queue(function() {
				// $(this).remove();
			  });
			}
		  }, 3000);
	
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		alignment: 'center',
		detach: false
	});

	// Nav.

	// Title Bar.
	$(
		'<div id="titleBar">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'<span class="title">' + $('#logo h1').html() + '</span>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

		var svg = Snap("#paper");
		var circ = svg.circle(0,1,1)
		.attr({fill:"rgba(0,255,255,.5)"})
		.pattern(0,0,5,5)
		.attr({patternTransform: "rotate(25)"});
		svg.rect(0,0,'100%','100%').attr({fill: circ});



})(jQuery);
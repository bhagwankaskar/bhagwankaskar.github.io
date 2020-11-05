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

			const preload = document.querySelector('.preload');
			const logo = document.querySelectorAll('#preloadLogo path');
			if (matchMedia("(max-width: 700px)").matches) {
				$('#svgfile').addClass('pos_mobile')
				$('#svgfile').load('./images/mobileLogo.svg');
				// css changes for mobile view
				$("#svgfile").css("position", "absolute");
				$("#svgfile").css("left", "12%");
				$("#svgfile").css("top", "32%");
	
				$('#spin_circle').addClass('pos_mobile')
				$('#spin_circle1').addClass('pos1_mobile')
				$('#preloadLogo').addClass('preload_text')
				$('#logo_shree_ganesh').addClass('shree_ganesh_mobile')
	
	
	
			} else {
				$('#svgfile').addClass('mb20')
				$("#svgfile").css("position", "absolute");
				$("#svgfile").css("left", "14%");
				$("#svgfile").css("top", "43%");
				$('#svgfile').load('./images/desktopLogo.svg');
			}
			console.log({logo})
		// for(let i=0;i< logo.length; i++){
		// 	console.log('---> length', `${i} is ${logo[i].getTotalLength()}`)
		// }

			// window.setTimeout(function () {
			// 	console.log(matchMedia("(max-width: 700px)").matches);
	
			// 	$body.removeClass('is-preload');
			// }, 0);

			

	
		

		window.setTimeout(function () {
			preload.classList.add('preload-finish');
		}, 2150);
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
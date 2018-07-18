/**
 * Mobile Scroll triggers for animation
 * @contributors: Geoffrey Crofte
 * @version : 1.0.1
 * @uniqid: 20160425-1054
 */
;( function( window, document, undefined ) {

	var slides = document.querySelectorAll('[id^="slide-"]'),
		onScrolling = function() {

			var c_scrollTop	= window.pageYOffset || document.body.scrollTop,
				bodyRect	= document.body.getBoundingClientRect(),
				bodyHeight	= document.body.clientHeight;

			[].forEach.call( slides, function( el, i ) {
				
				var elemRect 	= el.getBoundingClientRect(),
					offset_top	= elemRect.top - bodyRect.top;

				if ( ( offset_top - ( bodyHeight ) ) <= c_scrollTop ) {
					el.classList.add('go');
				}
				else if ( el.classList.contains('go') ) {
					el.classList.remove('go');
				}

			});

		};

	// set first item visible
	if ( document.getElementById('slide-2').length ) {
		document.querySelector('body').classList.add('no-go');
		document.getElementById('slide-2').classList.add('go');
	}

	// window onscroll
	window.addEventListener( 'scroll', function( e ) {
		window.requestAnimationFrame( onScrolling );
	} );

} )( window, document );


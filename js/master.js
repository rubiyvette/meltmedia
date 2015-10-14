 
(function($) {
    $(function() {
        $('.clicker').click(function(){
            $('nav.col').toggleClass("open-menu");
			$('.mobile-trigger').toggleClass('close-x');
			$('body').toggleClass('menu-push');
			$('.mask').toggleClass('active');
        });
		
		$(".mask").click(function() {
			$('body').removeClass('menu-push');
		});
		
		$(window).resize(function () {
            if (viewport().width >= 701) {
				$("body").removeClass("menu-push");
            }
        });
		
		$(window).resize();	
    });
})(jQuery);

var currentYear = (new Date).getFullYear(); 
$("#copy-year").text( (new Date).getFullYear() );


/**
 * Returns a more accurate width of the browser window
 * @returns {{width: *, height: *}}
 */
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[a + 'Width'], height: e[a + 'Height']};
}

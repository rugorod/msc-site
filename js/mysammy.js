;(function($) {
    var app = $.sammy(function() {

	//add plugin
        this.use('Mustache');

	// define a 'route'
        this.get('#/', function() {
	    // load some data

            this.render('mustache/slider.mustache')
	    // swap the DOM with the new content
		.replace('#slider-main');
	});

    });

    $(function() {
        app.run('#/')
    });
})(jQuery);
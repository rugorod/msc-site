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

	    this.load('json/mini-boxes.json')

		.render('mustache/mini-boxes.mustache')
	    // swap the DOM with the new content
		.replace('#mini-boxes');

            this.render('mustache/main.mustache')
	    // swap the DOM with the new content
		.replace('#main');

            this.render('mustache/footer.mustache')
	    // swap the DOM with the new content
		.replace('#footer');


	});


    });

    $(function() {
	app.run('#/')
    });
})(jQuery);
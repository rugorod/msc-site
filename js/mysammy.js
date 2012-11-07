;(function($) {
    var app = $.sammy(function() {

	//add plugin
        this.use('Mustache');

	// define a 'main-route'
        this.get('', function() {


	    this.load('json/mini-boxes.json')

            this.render('mustache/main.mustache')

		.replace('#main');

        });


	this.get('#/structura', function() {

            this.render('mustache/structura.mustache')

		.replace('#main');

        });



    });

    $(function() {
	app.run()
    });
})(jQuery);
;(function($) {
    var app = $.sammy(function() {

        //add plugin
        this.use('Mustache');


        this.get('/structura', function() {
            this.render('mustache/structura.mustache')
                .replace('#main');

        });

        this.get('', function() {
            this.load('json/mini-boxes.json')
                .render('mustache/main.mustache')
                .replace('#main');

        });

    });

    $(function() {
	app.run()
    });
})(jQuery);

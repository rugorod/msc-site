;(function($) {
    var app = $.sammy(function() {

        //add plugin
        this.use('Mustache');


        this.get('/structura', function() {
            this.render('mustache/structura.mustache')
                .replace('#main');

        });

        this.get('/contacts', function() {
            this.render('mustache/contacts.mustache')
                .replace('#main');

        });

        this.get('/history', function() {
            this.render('mustache/history.mustache')
                .replace('#main');

        });

        this.get('/clear', function() {
            this.render('mustache/clear.mustache')
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

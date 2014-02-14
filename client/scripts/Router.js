
// Dependencies App
// Router
(function() {
    'use strict';

    var Controllers = App.Controllers;

    App.Router = Backbone.Router.extend({
        routes: {
            '': Controllers.HomeController.index
        }
    });
}());
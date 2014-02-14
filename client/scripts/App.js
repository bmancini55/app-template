
// Dependencies window
// App 
// Defines the application's global namespace 
(function() {
    'use strict';

    // define the global namespace
    var App = window.App || {},
        Views = App.Views = {},
        Collections = App.Collections = {},
        Models = App.Models = {},
        Controllers = App.Controllers = {},

    // define global application namespace
        app = {};

    // Initialize the application
    // by loading main view
    app.initialize = function () {

        // render the main view
        this.mainView = new Views.MainView();
        this.mainView.render();

        // start navigation
        this.router = new App.Router();
        Backbone.history.start({pushState: true });
    };

    // Proxies call to mainView.setView
    app.setView = function (view, options) {
        this.mainView.setView(view, options);
    };

    // export to window
    window.App = App;
    window.app = app;

}());

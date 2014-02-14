
// Dependency App
// App.Controllers.HomeController
// Controller for the home page
(function() {
    'use strict';

    var home = App.Controllers.HomeController = {};

    home.index = function() {
        var view = new App.Views.HomeIndexView();
        app.setView(view);
        view.render();
        app.router.navigate('/');
    }

}());
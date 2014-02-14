
// Dependencies App
// App.Views.MainView
// This is the applications main view
(function() {
    'use strict';

    var templates = App.Templates,
        views = App.Views;

    views.MainView = Backbone.View.extend({

        el: '#body',

        template: templates.MainView,

        currentView: null,

        render: function () {
            var html = this.template({});
            this.$el.html(html);
            return this;
        },

        setView: function(view, options) {

            // destroy current view
            if(this.currentView) {
                this.currentView.remove();
            }

            // set the new view
            this.currentView = view;

            // attach render to as the main body for the new view
            // defer rendering to the caller
            if(this.currentView) {
                this.$el.find(".current-view").html(this.currentView.$el);
            }

            // optionally render immediately
            if(options && options.render) {
                this.currentView.render();
            }
        }

    });

}());
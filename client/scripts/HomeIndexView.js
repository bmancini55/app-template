
// Dependencies on App
// HomeIndexView
(function () {
    'use strict';

    var Templates = App.Templates;

    App.Views.HomeIndexView = Backbone.View.extend({

        template: Templates.HomeIndexView,

        render: function () {
            var html = this.template({});
            this.$el.html(html);
            return this;
        }

    });

}());
/*globals define */

define(
    'section/AboutView',
    [
        'ember',
        'App',
        'text!html/section/about.hbs'
    ],
    function(Ember, App) {
        'use strict';

        App.AboutView = Ember.View.extend({
            templateName: 'about',
            didInsertElement: function() {
                App.trigger('aboutReady');
            }
        });

        return App.AboutView;
    }
);

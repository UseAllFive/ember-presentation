/*globals define */

define(
    'component/TitleSelectComponent',
    [
        'ember',
        'App',
        'text!html/component/title-select.hbs'
    ],
    function(Ember, App) {
        'use strict';

        App.TitleSelectComponent = Ember.Component.extend({
            actions: {
                selectTitle: function() {
                    window.console.log('DEBUG');
                }
            }
        });

        return App.TitleSelectComponent;
    }
);

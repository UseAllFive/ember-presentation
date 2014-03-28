/*globals define */

define(
    'title/routes',
    [
        'ember',
        'App',
        'title/Title',
        'title/fixtures'
    ],
    function(Ember, App, Game) {
        'use strict';

        App.Router.map(function() {
            this.resource('titles');
        });

        return;
    }
);

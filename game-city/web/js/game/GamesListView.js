/*globals define */

define(
    'game/GamesListView',
    [
        'ember',
        'App',
        'text!html/game/games.hbs'
    ],
    function(Ember, App) {
        'use strict';

        App.GamesListView = Ember.View.extend({
            templateName: 'games',
            didInsertElement: function() {
                App.trigger('gamesReady');
            }
        });

        return App.GamesListView;
    }
);

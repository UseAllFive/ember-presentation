/*globals define, google */

define(
    'title/Title',
    [
        'ember',
        'emberData',
        'App',
        'game/Game'
    ],
    function(Ember, DS, App) {
        'use strict';
        var attr = DS.attr;

        App.Title = DS.Model.extend({
            identifier: attr('string'),
            name: attr('string'),
            //-- Relations:
            games: DS.hasMany('game')
        });

        App.Title.ALL_ID = 1;

        return App.Title;
    }
);

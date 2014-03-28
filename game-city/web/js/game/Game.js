/*globals define, google */

define(
    'game/Game',
    [
        'ember',
        'emberData',
        'App',
        'title/Title'
    ],
    function(Ember, DS, App) {
        'use strict';
        var attr = DS.attr;

        App.Game = DS.Model.extend({
            name: attr('string'),
            description: attr('string'),
            latitude: attr('number'),
            longtitude: attr('number'),
            //-- Computed properties:
            latLng: function() {
                return new google.maps.LatLng(
                    this.get('latitude'),
                    this.get('longitude')
                );
            }.property('latitude', 'longitude'),
            //-- Relations:
            title: DS.belongsTo('title')
        });

        return App.Game;
    }
);

/*globals define */

define(
    'component/PlacesAutocompleteComponent',
    [
        'ember',
        'App',
        'text!html/component/places-autocomplete.hbs'
    ],
    function(Ember, App) {
        'use strict';

        App.PlacesAutocompleteComponent = Ember.Component.extend({
        });

        return App.PlacesAutocompleteComponent;
    }
);

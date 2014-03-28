/*globals define */

define(
    'App',
    [
        'ember',
        'emberData',
        'text!html/application.hbs',
        'text!html/partials/footer.hbs',
        'text!html/partials/header.hbs'
    ],
    function(Ember, DS) {
        'use strict';

        var App = Ember.Application.createWithMixins(Ember.Evented);

        //-- Indicate we want to use fixtures.
        App.ApplicationAdapter = DS.FixtureAdapter.extend({
            queryFixtures: function(fixtures, query, type) {
                return fixtures.filter(function(item) {
                    for(var prop in query) {
                        if( item[prop] !== query[prop]) {
                            return false;
                        }
                    }
                    return true;
                });
            }
        });
        //-- Use pushState.
        App.Router.reopen({
            location: 'history'
        });

        App.ApplicationController = Ember.Controller.extend({
            actions: {
                findGame: function() {
                    this.transitionToRoute('games');
                }
            }
        });

        //-- Don't start routing.
        App.deferReadiness();

        return App;
    }
);

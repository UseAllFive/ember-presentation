/*globals define */

define(
    'section/routes',
    [
        'ember',
        'jquery',
        'App',
        'game/Game',
        'game/fixtures',
        'title/Title',
        'title/fixtures',
        'mixin/SectionTransitionMixin',
        'section/AboutView',
        'section/CallToActionView'
    ],
    function(Ember, $, App, Game) {
        'use strict';

        App.Router.map(function() {
            this.route('about');
            this.route('callToAction', { path: '/' });
        });

        App.AboutRoute = Ember.Route.extend(App.SectionTransitionMixin, {
            beforeModel: function() {
                this.performSectionTransition('about');
            }
        });

        App.CallToActionRoute = Ember.Route.extend({
        });

        return;
    }
);

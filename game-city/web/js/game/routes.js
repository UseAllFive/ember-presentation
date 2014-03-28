/*globals define */

define(
    'game/routes',
    [
        'ember',
        'App',
        'game/Game',
        'game/GamesListView',
        'game/fixtures',
        'title/Title',
        'title/fixtures',
        'mixin/SectionTransitionMixin',
    ],
    function(Ember, App, Game) {
        'use strict';

        App.Router.map(function() {
            this.resource('games');
        });

        App.GamesRoute = Ember.Route.extend(App.SectionTransitionMixin, {
            afterModel: function(transition) {
                //-- TODO: Validation.
                this.performSectionTransition('game-browser');
            },
            model: function() {
                //-- TODO: Only works the first time.
                var titleId = App.titleContext.get('selectedTitle.id');
                var promise;
                if (App.Title.ALL_ID === titleId) {
                    promise = this.store.find('game');
                } else {
                    promise = this.store.find('game', {
                        title: App.titleContext.get('selectedTitle.id')
                    });
                }
                return promise;
            },
            renderTemplate: function() {
                //-- Custom outlet.
                this.render('games', { outlet: 'gameBrowserGames' });
            },
            actions: {
                willTransition: function() {
                    return true;
                }
            }
        });

        return;
    }
);

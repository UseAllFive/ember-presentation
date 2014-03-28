/*globals define */

define(
    'title/fixtures',
    [
        'ember',
        'App',
        'title/Title'
    ],
    function(Ember, App, Title) {
        'use strict';

        Title.FIXTURES = [
            {
                id: 1,
                identifier: 'title.names.all',
                name: 'All Titles'
            },
            {
                id: 2,
                identifier: 'title.names.starcraft',
                name: 'StarCraft'
            },
            {
                id: 3,
                identifier: 'title.names.lol',
                name: 'League of Legends'
            },
            {
                id: 4,
                identifier: 'title.names.dota',
                name: 'Defense of the Ancients 2'
            },
            {
                id: 5,
                identifier: 'title.names.ssbm',
                name: 'Super Smash Bros. Melee'
            }
        ];

        return;
    }
);

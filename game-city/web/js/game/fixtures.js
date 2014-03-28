/*globals define */

define(
    'game/fixtures',
    [
        'ember',
        'App',
        'game/Game'
    ],
    function(Ember, App, Game) {
        'use strict';

        Game.FIXTURES = [
            {
                id: 1,
                name: 'Party 1',
                description: 'Description 1',
                title: 2
            },
            {
                id: 2,
                name: 'Party 2',
                description: 'Description 2',
                title: 3
            },
            {
                id: 3,
                name: 'Party 3',
                description: 'Description 3',
                title: 4
            },
            {
                id: 4,
                name: 'Party 4',
                description: 'Description 4',
                title: 5
            },
            {
                id: 5,
                name: 'Party 5',
                description: 'Description 5',
                title: 2
            }
        ];

        return;
    }
);

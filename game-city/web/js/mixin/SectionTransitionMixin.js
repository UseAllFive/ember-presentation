/*globals define */

define(
    'mixin/SectionTransitionMixin',
    [
        'ember',
        'jquery',
        'underscore',
        'App'
    ],
    function(Ember, $, _, App) {
        'use strict';

        App.SectionTransitionMixin = Ember.Mixin.create({
            performSectionTransition: function(sectionName) {
                var selector = 'section.' + sectionName;
                var readyEvent = sectionName + 'Ready';
                function transitionIn() {
                    var $section = $(selector);
                    if (0 === $section.length) {
                        return false;
                    }
                    $section.get(0).scrollIntoView();
                }
                if (false === transitionIn()) {
                    App.on(readyEvent, transitionIn);
                }
            }
        });

        return App.SectionTransitionMixin;
    }
);

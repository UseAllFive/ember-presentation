/*globals define */

define(
    'mixin/FillViewportMixin',
    [
        'ember',
        'jquery',
        'underscore',
        'App'
    ],
    function(Ember, $, _, App) {
        'use strict';

        App.FillViewportMixin = Ember.Mixin.create({
            _adjustHeight: undefined,
            didInsertElement: function() {
                var $window = $(window);
                var view = this;
                function adjustHeight() {
                    view.$().height($window.height());
                }
                adjustHeight();
                this._adjustHeight = _.debounce(adjustHeight, 100, true);
                $window.on('resize', this._adjustHeight);
            },
            willDestroyElement: function() {
                $(window).off('resize', this._adjustHeight);
                this._adjustHeight = null;
            }
        });

        return App.FillViewportMixin;
    }
);

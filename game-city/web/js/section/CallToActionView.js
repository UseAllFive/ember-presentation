/*globals define */

define(
    'section/CallToActionView',
    [
        'ember',
        'App',
        'component/PlacesAutocompleteComponent',
        'component/TitleSelectComponent',
        'mixin/FillViewportMixin',
        'title/fixtures',
        'text!html/section/call-to-action.hbs'
    ],
    function(Ember, App) {
        'use strict';

        //-- TODO: Temporary. Not having a CallToAction model complicates things.
        App.titleContext = Ember.Object.create({
            titles: App.Title.FIXTURES,
            selectedTitle: null
        });

        App.CallToActionView = Ember.View.extend(App.FillViewportMixin, {
            templateName: 'call-to-action',
            context: App.titleContext
        });

        return App.CallToActionView;
    }
);

/*globals requirejs, require */

(function(undefined) {
    'use strict';

    function addTemplate(name, content) {
        window.console.log(name);
        require(['jquery'], function($) {
            $('<script>')
                .attr({
                    type: 'text/x-handlebars',
                    'data-template-name': name
                })
                .html(content)
                .appendTo('body')
            ;
        });
    }

    //-- Note: The Ember folks warn against using AMD. It's not officially supported.
    //   See http://tomdale.net/2012/01/amd-is-not-the-answer/
    requirejs.config({
        baseUrl: '/js',
        config: {
            text: {
                onXhrComplete: function(xhr, url) {
                    var extension;
                    var matches;
                    var name;
                    if (xhr.status > 399 && xhr.status < 600) {
                        return; //-- Bail on error.
                    }
                    matches = url.match(/([^\/]+)\/([^\/]+)\.([^.]+)$/);
                    if (4 === matches.length) {
                        extension = matches[3];
                        name = matches[2];
                        if ('component' === matches[1]) {
                            name = 'components/' + name;
                        }
                    }
                    if ('hbs' === extension) {
                        addTemplate(name, xhr.response);
                    }
                }
            }
        },
        paths: {
            //-- Use dev versions for easier debugging.
            ember:      '/vendor/ember/ember',
            emberData:  '/vendor/ember-data/ember-data',
            handlebars: '/vendor/handlebars/handlebars',
            jquery:     '/vendor/jquery/jquery',
            tweenMax:   '/vendor/greensock/src/uncompressed/TweenMax',
            underscore: '/vendor/underscore/underscore',
            //-- Path overrides.
            html:       '../html',
            //-- RequireJS plugins.
            text:       '/vendor/requirejs-text/text'
        },
        shim: {
            ember: {
                deps: ['handlebars', 'jquery'],
                exports: 'Ember'
            },
            emberData: {
                deps: ['ember'],
                exports: 'DS'
            },
            handlebars: {
                exports: 'Handlebars'
            },
            tweenMax: {
                exports: 'TweenMax'
            },
            underscore: {
                exports: '_'
            },
        }
    });

    //-- Start and configure app.
    require(
        [
            //-- Vendor dependencies first.
            'emberData',
            //-- Application dependencies second.
            'App',
            'game/routes',
            'section/routes',
            'title/routes'
        ],
        function(DS, App) {
            //-- Expose for Ember.
            window.App = App;
            //-- Start routing.
            App.advanceReadiness();
        }
    );
}());

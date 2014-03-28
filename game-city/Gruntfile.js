/* global process, module, require */

var _matchdep = require('matchdep');

module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    //-- Load plugins.
    _matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', [
    ]);

    grunt.registerTask('deploy', [
    ]);

};

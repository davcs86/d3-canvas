'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    config: {
      sources: 'lib'
    },

    jshint: {
      src: [
        ['<%=config.sources %>']
      ],
      options: {
        jshintrc: true
      }
    }
  });

  grunt.registerTask('default', [ 'jshint']);
};
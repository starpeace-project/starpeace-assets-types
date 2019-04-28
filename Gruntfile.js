'use strict';

module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    clean: {
      build: ['build/']
    },

    coffee: {
      compile: {
        expand: true,
        cwd: "src",
        src: ['**/*.coffee'],
        dest: 'lib',
        ext: '.js'
      }
    },

    jsdoc2md: {
      documentation: {
        src: 'lib/**/*.js',
        dest: 'docs/documentation.md'
      }
    }
  });

  grunt.registerTask('build', ['coffee:compile']);
  grunt.registerTask('documentation', ['build', 'jsdoc2md']);
  grunt.registerTask('default', ['clean', 'build', 'documentation']);
}

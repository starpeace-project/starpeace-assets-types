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
        dest: 'docs/documentation.md',
        options: {
          partial: ['jsdoc2md/docs.hbs', 'jsdoc2md/header.hbs', 'jsdoc2md/scope.hbs', 'jsdoc2md/sig-link.hbs'],
          'heading-depth': 1
        }
      },
    }
  });

  grunt.registerTask('build', ['coffee:compile']);
  grunt.registerTask('build_test', ['coffee:compile_test']);

  grunt.registerTask('documentation', ['build', 'jsdoc2md']);
  grunt.registerTask('default', ['clean', 'build', 'documentation']);
}

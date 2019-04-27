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
    }
  });

  grunt.registerTask('build', ['coffee:compile']);
  grunt.registerTask('default', ['clean', 'build']);
}

'use strict';

module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    clean: {
      build: ['build/'],
      test: ['test/']
    },

    coffee: {
      compile: {
        expand: true,
        cwd: "src",
        src: ['**/*.coffee'],
        dest: 'lib',
        ext: '.js'
      },
      compile_test: {
        expand: true,
        cwd: "tst",
        src: ['**/*.coffee'],
        dest: 'test',
        ext: '.js'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
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

  grunt.registerTask('cwd', 'get cwd', function() {
    console.log("cwd: " + process.cwd());
    console.log("lib: " + grunt.file.expand({}, 'lib/**/*.js'));
  });

  grunt.registerTask('build', ['coffee:compile']);
  grunt.registerTask('build_test', ['coffee:compile_test']);

  grunt.registerTask('documentation', ['cwd', 'build', 'cwd', 'jsdoc2md']);
  grunt.registerTask('test', ['clean:test', 'build', 'build_test', 'mochaTest']);

  grunt.registerTask('default', ['clean', 'build', 'documentation', 'test']);
}

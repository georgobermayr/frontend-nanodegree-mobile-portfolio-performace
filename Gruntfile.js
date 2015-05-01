module.exports = function(grunt) {

  var mozjpeg = require('imagemin-mozjpeg');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'js/dev/perfmatters.js',
        dest: 'js/perfmatters.min.js'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/style.min.css': ['css/dev/style.css'],
          'css/print.min.css': ['css/dev/print.css']
        }
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },
    watch: {
      jsmin: {
        files: ['js/dev/*.js'],
        tasks: ['uglify']
      },
      css: {
        files: ['css/dev/*.css'],
        tasks: ['cssmin']
      },
      imagemin: {
        files: ['img/**/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('build', ['uglify', 'cssmin', 'imagemin']);
  grunt.registerTask('default', ['build','watch']);

};
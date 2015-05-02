module.exports = function(grunt) {

  var mozjpeg = require('imagemin-mozjpeg');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      main: {
        src: 'js/dev/perfmatters.js',
        dest: 'js/perfmatters.min.js'
      },
      pizza: {
        src: 'views/js/main.js',
        dest: 'views/js/main.min.js'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/print.min.css': ['css/dev/print.css'],
          'css/style.min.css': ['css/dev/style.css'],
          'views/css/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css'],
          'views/css/style.min.css': ['views/css/style.css']
        }
      }
    },
    critical: {
      main: {
        options: {
          base: '',
          css: [
            'css/style.min.css'
          ]
        },
        src: 'index.dev.html',
        dest: 'index.html'
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index.html'
        }
      }
    },
    imagemin: {
      main: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      },
      pizza: {
        files: [{
          expand: true,
          cwd: 'views/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'views/images/'
        }]
      }
    },
    watch: {
      jsmin: {
        files: ['js/dev/*.js', 'views/js/*.js'],
        tasks: ['uglify']
      },
      css: {
        files: ['css/dev/*.css'],
        tasks: ['cssmin', 'critical', 'htmlmin']
      },
      imagemin: {
        files: ['img/**/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      },
      html: {
        files: ['index.dev.html'],
        tasks: ['critical', 'htmlmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('build', ['uglify', 'cssmin', 'critical', 'htmlmin', 'imagemin']);
  grunt.registerTask('default', ['build','watch']);

};
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      less: {
        files: [
        'LESS/*',
        'bower_components/normalize-css/normalize.css'
        ],
        tasks: ['less']
      },
      css: {
        files: [
        'compiled_css/*'
        ],
        tasks: ['cssmin']
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      combinejs: {
        files: {
          './<%= ghost_theme_name %>/assets/js/all.min.js': 
          [
          'bower_components/modernizr/modernizr.js',
          'custom_components/responsive_iframes/responsive_iframes.js'
          ]
        }
      }
    },

    less: {
      components: {
        files: {
          'compiled_css/compiled_css.css': ['LESS/less_imports.less']
        }
      },
      options: {
        expand: true,
        paths: [
        'bower_components/lesshat',
        'LESS'
        ]
      }
    },

    cssmin: {
      combine: {
        files: {
          './<%= ghost_theme_name %>/assets/css/style.css': ['bower_components/normalize-css/normalize.css', 'compiled_css/compiled_css.css']
        }
      }
    },

    copy: {
      main: {
        files: [{
          cwd: '<%= ghost_theme_name %>/',  // set working folder / root to copy
          src: '**',           // copy all files and subfolders
          dest: '<%= ghost_production_directory %>/content/themes/<%= ghost_theme_name %>/',    // destination folder
          expand: true           // required when using cwd
        }]
      }
    },
    

    'ghost_production_directory': '../../public/ghost',
    'ghost_theme_name': 'masonD',

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

};

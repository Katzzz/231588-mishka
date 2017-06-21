"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 2 versions"
            ]})
          ]
        },
        src: "css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);

};


  require("load-grunt-tasks")(grunt);
    grunt.initConfig({
      postcss: {
        style: {
          options: {
            processors: [
            require("autoprefixer")({browsers: […]}),
            require("css-mqpacker")({
              sort: true
            })
          ]
        },
        src: "css/*.css"
      }
     }
    })


  require("load-grunt-tasks")(grunt);
    grunt.initConfig({
      csso: {
        style: {
          options: {
            report: "gzip"
          },
        files: {
          "css/style.min.css": ["css/style.css"]
        }
      }
    }
  });

  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png,jpg,gif}"]
        }]
      }
    }
  });

"use strict";

module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-postcss");

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

    svgstore: {
      options: {
        svg: {
         style: "display: none"
        }
      },
      symbols: {
        files: {
          "img/symbols.svg": ["img/icons/*.svg"]
        }
      }
    }

    svgmin: {
      symbols: {
        files: [{
          expand: true,
          src: ["img/icons/*.svg"]
        }]
      }
    }

  });

    grunt.initConfig({
      svgstore: { … },
      svgmin: { … }
    });

  grunt.registerTask("symbols", ["svgmin", "svgstore"]);

  grunt.registerTask("serve", ["browserSync", "watch"]);


};


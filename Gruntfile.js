'use strict';

module.exports = function(grunt) {

    var conf = {
        webDir      : "public/assets/",
        scssDir     : "scss/",
        cssDir      : "css/",
        jsDir       : "js/",
        imgDir      : "img/",
        imgProdDir  : "prod/",
        jsFiles     : [],
        libName     : 'app'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: ["**/*.scss"],
                tasks: ['cssroutine'],
                options: {
                    cwd: conf.webDir + conf.scssDir,
                },
            },
        },
        //Compile specified SASS files
        sass: {
            css: {
                files: [{
                    expand: true,
                    cwd: conf.webDir+conf.scssDir,
                    src: [ conf.libName + '.scss'],
                    dest: conf.webDir + conf.cssDir,
                    ext: '.css'
                }]
            },
        },
        // Compress generated css files
        cssmin: {
            minify: {
                expand: true,
                cwd: conf.webDir+conf.cssDir,
                src: [conf.libName + '.css', !conf.libName + '.min.css'],
                dest: conf.webDir+conf.cssDir,
                ext: '.min.css'
            }
        },
        //Prefix CSS3 properties
        autoprefixer: {
            no_dest: {
              src: conf.webDir + conf.cssDir + conf.libName + '.css' // globbing is also possible here
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-newer');
    //Watch
    grunt.registerTask('cssroutine', ['sass:css', 'newer:autoprefixer', 'newer:cssmin']);
};

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: {
                src: [
                    'public/js/app.js'
                ]
            }
        },

        less: {
            default: {
                options: {},
                files: {
                    "public/css/app.css": "less/app.less"
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
}

// Defintes the grunt tasks for the application
module.exports = function (grunt) {

    // load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        // lint ze codes
        jshint: {
            server: {
                options: {
                    node: true,
                    browser: false,
                    trailing: true,
                    undef: true
                },
                src: [
                    'Gruntfile.js',
                    'app.js',
                    'server/**/*.js'
                ]
            },
            client: {
                options: {
                    node: false,
                    browser: true,
                    trailing: true,
                    undef: true,
                    globals: {
                        '$': true,
                        '_': true,
                        'Handlebars': true,
                        'Backbone': true,
                        'App': true,
                        'app': true
                    }
                },
                src: [
                    'client/**/*.js',
                    '!client/vendors/**/*.js',
                    '!client/build/**/*.js'
                ]
            }
        },

        // cleans the build folder
        clean: {
            build: {
                src: [ 'client/build' ]
            }
        },

        // precompiles handlebars templates
        handlebars: {
            compile: {
                options: {
                    namespace: 'App.Templates',

                    // use filename without extension as key
                    processName: function (filePath) {
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1].split('.')[0];
                    }
                },

                // output file: input files
                files: {
                    'client/build/templates.js': 'client/templates/*.hbs'
                }
            }
        },

        // copies files to the output folder
        copy: {
            bootstrap: {
                files: [
                    { src: 'client/vendors/bootstrap/dist/css/bootstrap.css', dest: 'client/build/bootstrap/css/bootstrap.css' },
                    { src: 'client/vendors/bootstrap/dist/js/bootstrap.js', dest: 'client/build/bootstrap/js/bootstrap.js' },
                    { expand: true, flatten: true, src: 'client/vendors/bootstrap/dist/fonts/*', dest: 'client/build/bootstrap/fonts/' }
                ]
            }
        },

        // concats files into single outputs
        concat: {
            dependencies: {
                src: [
                    'client/vendors/jquery/jquery.js',
                    'client/vendors/json2/json2.js',
                    'client/vendors/underscore/underscore.js',
                    'client/vendors/backbone/backbone.js',
                    'client/vendors/handlebars/handlebars.js'
                ],
                dest: 'client/build/dependencies.js'
            },
            app: {
                src: [
                    'client/build/templates.js',
                    'client/scripts/App.js',

                    // possible way to dynamically load these based on order
                    // basically always goes models, collections, views, controllers
                    'client/scripts/MainView.js',
                    'client/scripts/HomeIndexView.js',
                    'client/scripts/HomeController.js',

                    // should always be last
                    'client/scripts/Router.js',
                    'client/scripts/Start.js'
                ],
                dest: 'client/build/app.js'
            }
        },

        // watches for file changes to trigger rebuilds
        watch: {
            client: {
                files: [ 'client/**/*' ],
                tasks: [ 'build' ]
            }
        }
    });

    grunt.registerTask('verify', 'Verifies code quality', ['jslint']);
    grunt.registerTask('build', 'Builds the client code', ['clean', 'copy', 'handlebars', 'concat']);
};

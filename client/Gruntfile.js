module.exports = function(grunt) {
    grunt.initConfig({        
        browserify: {
            
        },
        jshint: {
            src: ['src/js/**/*.js']
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'dist/css',
                    environment: 'production',
                    imagesPath: 'dist/images',
                    importPath: ['bower_components/bootstrap-sass-official/assets/stylesheets'],
                    force: true,
                    outputStyle: 'compressed'
                }
            }
        },
        concat: {
            dist: {
                src: ['src/**/*.js'],
                dest: ['dist/js/app.min.js']
            }
        },
        clean: {
            build: ["dist/**"]
        },
        copy: {
            main: {
                files: [
                    {
                        cwd: 'src',
                        src: [
                            '**',
                            '!**/js/**',
                            '!**/sass/**'
                        ],
                        dest: 'dist',
                        expand: true
                    },
                ]
            },
            bower: {
                files: [
                    {
                        cwd: 'bower_components',
                        src: [
                            'angular/angular.min.js',
                            'angular-socket-io/socket.min.js',
                            'angular-ui-router/release/angular-ui-router.min.js',
                            'bootstrap-sass-official/assets/javascripts/bootstrap.min.js',
                            'font-awesome/css/font-awesome.min.css',
                            'ionicons/css/ionicons.min.css',
                            'jquery/dist/jquery.min.js',
                            'lodash/lodash.min.js',
                            'ngStorage/src/angularLocalStorage.js',
                            'phaser/build/phaser.min.js'
                        ],
                        dest: 'dist/libs',
                        flatten: true,
                        expand: true
                    },
                ]
            },
            fontAwesome: {
                files: [
                    {
                        cwd: 'bower_components/font-awesome',
                        src: [
                            'fonts/**',
                        ],
                        dest: 'dist/fonts',
                        flatten: true,
                        expand: true
                    },
                ]
            },
            ionicons: {
                files: [
                    {
                        cwd: 'bower_components/ionicons',
                        src: [
                            'fonts/**',
                        ],
                        dest: 'dist/fonts',
                        flatten: true,
                        expand: true
                    },
                ]
            }
        },
        uglify: {
            
        },
        nodemon: {
            dev: {
                script: '../server/server.js',
                options: {
                    nodeArgs: '--debug',
                    env: {
                        PORT: 8080
                    }
                }
            }
        },
        watch: {
            
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-nodemon');
    
    grunt.registerTask('default', ['jshint', 'clean', 'copy', 'compass']);
};
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        SilverstripeTheme: 'startTheme',
        banner:
        '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n */\n',
        sass: {
            dist: {
                files: {
                    '../themes/<%= SilverstripeTheme %>/css/style.css': 'scss/style.scss'
                }
            }
        },
        concat: {
            options: {
                stripBanners: false,
                banner: '<%= banner %>'
            },
            vendor: {
                src: ['scripts/vendor/*.js'],
                dest: '../themes/<%= SilverstripeTheme %>/scripts/vendor.min.js',
            },
            custom:{
                src: ['scripts/common/*.js'],
                dest: '../themes/<%= SilverstripeTheme %>/scripts/<%= SilverstripeTheme %>.js',
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    '../themes/<%= SilverstripeTheme %>/css/style.css': ['../themes/<%= SilverstripeTheme %>/css/style.css']
                }
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>',
                mangle: false
            },
            dist: {
                files: {
                    '../themes/<%= SilverstripeTheme %>/scripts/<%= SilverstripeTheme %>.min.js' : ['../themes/<%= SilverstripeTheme %>/scripts/<%= SilverstripeTheme %>.js']
                }
            }
        },
        jshint: {
            files: ['scripts/common/common.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['scss/*.scss', 'scripts/custom/custom.js', 'scripts/vendor/*.js', '../themes/<%= SilverstripeTheme %>/templates/**/*', '../mysite/code/**/*'],
            tasks: ['jshint', 'sass', 'concat', 'uglify', 'cssmin'],
            options: {
            // Start a live reload server on the default port 35729
                livereload: true,
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint','sass']);

    // Print a timestamp (useful for when watching)
    grunt.registerTask('timestamp', function () {
        grunt.log.subhead(Date());
    });
};
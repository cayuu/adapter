module.exports = function( grunt ) {

  // Set default file paths
  grunt.config.set('files', [ 'lib/**/*.js' ]);


  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-component-build');


  // Project configuration
  grunt.config.init({

    // Meta data from config file
    pkg: grunt.file.readJSON('package.json'),

    // Linting options
    jshint:
    {
      // Defaults
      options: grunt.file.readJSON('.jshintrc'),
      files: { src: grunt.config.get('files') }
    },

    component_build: {
      adapter: {
        // Output directory
        output: './build',
        scripts: true,
        styles: false,
        standalone: true
      }
    },

    // Watch tasks to run on file changes
    watch:
    {
      files: [grunt.config.get('files')],
      tasks: ['jshint', 'component_build']
    }

  });

  // Default task(s)
  grunt.registerTask('default', ['jshint', 'component_build']);
  grunt.registerTask('lint', ['jshint']);

};

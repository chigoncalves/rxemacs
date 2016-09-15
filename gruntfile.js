module.exports = function (grunt) {
  grunt.config.init ({
    cssmin: {
      target: {
	files: [{
	  expand: true,
	  src: ['*.css', '!*.min.css'],
	  dest: 'gen',
	  ext: '.min.css'
	}]
      }
    },
    csslint: {
      strict: {
	options: {
	  import: 2
	},
	src: ['*.css']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask ('default', ['cssmin', 'csslint']);
};

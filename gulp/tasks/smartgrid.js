var gulp        = require('gulp'),
    smartgrid   = require('smart-grid');

    var settings = {
        outputStyle: 'sass',
        columns: 12, 
        mobileFirst: false, 
        container: {
            maxWidth: '1170px', 
        },
    };
    
    smartgrid('./src/sass/bin', settings);
var sassdoc = require('sassdoc');


sassdoc.parse(__dirname + '/sass/sass/**/*.scss',{verbose:true}).then(function (e) {
    console.log(e);
    console.log('All done!');
});


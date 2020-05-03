var sass = require('node-sass');
var fs = require('fs');

function compileSass(options) {

  var result = sass.renderSync({
      file: options.src,
      outputStyle: 'expanded',
      sourceMap: true,
      sourceComments: true,
      outFile: __dirname + '/css/path.css'
  });

  console.log(result)

   fs.writeFileSync(__dirname + '/css/path.css',result.css, function(elem){
     return elem
  }); 
  
  console.log(' ' + options.dest + ' built.'); 
};

compileSass({
  src : __dirname + '/scss/theme.scss',
  dest: __dirname + '/path-index.css'
});




var sass = require("node-sass");
var fs = require("fs");

/**
 * @description Función cuya finalidad es la de partiendo de un archivo scss, lo compile a css, creando un directorio propio
 * @param options - Objeto que recibe la url del archivo y el destino donde queremos compilar el mismo
 */
function compileSass(options) {
  /**
   * @param result - Objeto de sass que consumiendo el metodo renderSync de node-sass le pasamos la configuración a compilar
   */
  var result = sass.renderSync(
    {
      file: options.src,
      outputStyle: "compressed",
      sourceMap: false,
      sourceComments: false,
      outFile: __dirname + "/../dist/main.css",
    },
    function (elem) {
      return elem;
    }
  );

  /**
   * Por medio de la estructura de controlamos que existe el repositorio de destino y compila el archivo, en caso de no existir la carpeta dist
   * hace ambas cosas
   */
  path = __dirname + "/../dist/";

  if (fs.existsSync(path)) {
    createFile(result, options);
  } else {
    fs.mkdirSync(__dirname + "/../dist/", result.css, (elem) => {
      console.log(elem);
      return elem;
    });
    createFile(result,options);
  }

  console.log(
    `El archivo ha sido compilado en ${options.dest} en un tiempo de ${result.stats.duration}ms`
  );
}

/**
 * @param result - Objeto de configuración sass
 * @param options - Objeto que recibe la url del archivo y el destino donde queremos compilar el mismo
 */
function createFile(result, options) {
  regularExp = new RegExp(".map.");
  newPath = options.dest.replace(regularExp, ".");

  fs.writeFileSync(newPath, result.css, (elem) => {
    return elem;
  });

  if (result.map) {
    fs.writeFileSync(options.dest, result.map, (elem) => {
      return elem;
    });
  }
}

compileSass({
  src: __dirname + "/../sass/sass/main.scss",
  dest: __dirname + "/../dist/main.map.css",
});

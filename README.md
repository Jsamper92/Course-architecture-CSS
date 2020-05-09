# course-architecture-CSS.

El curso tiene como finalidad aprender los conocimientos necesarios para montar una arquitectura CSS escalable y mantenible, siguiendo 
la metodología [BEM](http://getbem.com/) para la nomenclatura de clases e [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) para la generación de una estructura de archivos css, que nos permita controlar la especifidad de manera controlada. Por otro lado, nos sumergiremos en el preprocesador [SASS](https://sass-lang.com/) con herramientas que nos permita extender las utilidades que a dia de hoy, CSS no nos facilita.
 
## Configuración 
1. Ejecutaremos en primer lugar `npm init`` para instalar futuras dependencias que necesitaremos más adelante.
2. Precisaremos de un servidor para levantar el proyecto, en este caso usaremos [http-server](https://www.npmjs.com/package/http-server),   instalando en el package.json lanzando el comando `npm i -g http-server`.
3. Una vez hecho esto, crearemos un script en el package.json para lanzar `http-server`.

A continuación, detallaremos el enunciado de los ejercicios que nos acompañaran a lo largo del curso. Todos y cada uno de estos, contaran con una carpeta llamada _solutions/_ con la solución del mismo. Cada ejercicio partira de la solución del anterior.

## Ejercicio 1
1. Dada la estructura base, analizar el archivo _index.html_ y migrar la nomenclatura bajo la metodología BEM, clonando estas nuevas clases en el archivo _assets/styles/style.css_.
2. Una vez hecho esto comprobar el visual.

## Ejercicio 2
Con las clases CSS bajo la nomenclatura BEM, es momento de crear una estructura ITCSS. Lo haremos usando nomenclatura SASS y empezaremos a jugar con la compilación.
1. Instalamos sass `npm i -g sass`
2. Creamos las carpetas con sus respectivos archivos que definidas por ITCSS
3. En el package.json, creamos el script que ejecutará la compilación, basandonos en la [Command-line Interface](https://sass-lang.com/documentation/cli/dart-sass) del proprio sass.
4. Comprobamos que no haya cambiado nada en el visual
 

Package.describe({
  name: 'ipstas:sly',
  summary: 'sly carousel for meteor http://darsa.in/sly/',
  "homepage": "https://github.com/ipstas/meteor-sly",
  "author": "ipstas",
  "version": "1.2.7_1",
  "git": "https://github.com/ipstas/meteor-sly.git"

});

Package.on_use(function (api) {
  var both = ['client', 'server'];

  api.use([
/*     'iron:router',
    'coffeescript',
    'underscore' */
  ], both);

  api.use([
    'ui',
    'jquery',
    'templating',
    //'stylus',
    //'mquandalle:jade'
  ], 'client');

  api.add_files([
    //'client/demo/js/namespace.js', // first
    //'client/demo/slyDemo.html',

    // dont mess with the apps css version
    //'client/demo/css/horizontal.css',
    //'client/demo/js/vendor/plugins.js',
    'lib/dist/sly.js',
    //'client/demo/js/horizontal.js'
    //'client/demo/js/demo.js'
  ], 'client' );

  api.add_files([
/*     'both/routes.coffee' */
  ], both );

/*   api.export(["SlyDemo"], 'client' ); */

});

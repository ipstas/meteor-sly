Package.describe({
  name: 'dcsan:sly',
  summary: 'sly carousel for meteor http://darsa.in/sly/',

  "name": "sly",
  "homepage": "https://github.com/dcsan/meteor-sly",
  "author": "dcsan",
  "version": "v1.2.7_1",
  "git": "https://github.com/dcsan/meteor-sly.git"

});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/dist/sly.js', 'client');
});

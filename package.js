Package.describe({
  summary: "Serves a catalog (csv) for Facebook dynamic ads",
  version: "0.0.1",
  git: "https://github.com/semeano/meteor-fb-catalog.git"
});

Package.on_use(function (api) {
  api.use('webapp@1.0.0', 'server');
	api.add_files('catalog.js', 'server');
	api.export('catalog', 'server');
});

var pubRoot, stack;
var fs = Npm.require('fs'),
  path = Npm.require('path');

if (__meteor_bootstrap__.bundle) {
	pubRoot = __meteor_bootstrap__.bundle.root + 'public';
} else {
	pubRoot = path.join(__meteor_bootstrap__.serverDir, '..', 'client', 'app');
}

stack = __meteor_bootstrap__.app ? __meteor_bootstrap__.app.stack : WebApp.connectHandlers.stack;

stack.splice(0, 0, {
	route: '/catalog.csv',
	handle: function(req, res, next) {
		fs.readFile(pubRoot + '/catalog.csv', function(err, data) {
			catalogOut(res, err, data);
		}.future());
	}
});

catalog = {
	lines: []
};

function catalogOut(res, err, data) {
	res.writeHead(200, {'Content-Type': 'text/csv'});

	if (!err)
		res.write(data + '\n');

	for (var i=0; i < catalog.lines.length; i++)
		res.write(catalog.lines[i] + '\n');

	res.end();
}

catalog.addLine = function(line) {
	this.lines.push(line);
};

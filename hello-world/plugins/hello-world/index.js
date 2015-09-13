module.exports = function (options, imports, register) {
  var logger = imports.logger.getLogger('hello-world');

  var waveletApp = imports.waveletApp;  // waveletApp is an express app

  waveletApp.get(root + '/', function(req, res) {
    res.end("Hello World");
  });

  register(null, {}); // provide nothing
};
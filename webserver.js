var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("../learnAngular/UnravelNg"));

app.listen(5100);

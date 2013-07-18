var connect = require('connect'),
    send = require('send'),
    app = connect();

console.log('Starting server on 1229...');

app.use(connect.static('wwwroot'))
    .use('/', function(req, res, next) {
        send(req, __dirname + '/wwwroot/index.html').pipe(res);
    });

connect.createServer(app).listen(1229);

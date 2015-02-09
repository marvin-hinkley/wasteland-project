var PORT        = 9000,
    app         = require('express')(),
    io          = require('socket.io').listen(app.listen(PORT)),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser')
    models      = require('./routes')(app, mongoose);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

io.sockets.on('connection', function(socket){
    console.log('Socket connection established, Master.')
});

app.get('/api', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
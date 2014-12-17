var io = require('socket.io')(300);

io.on('connection', function (socket) {

  socket.emit('init', 'Hola!');

  socket.on('next', function() {
    console.log('yeah , lets play next ');
  })

  socket.on('prev', function() {
    console.log('yeah , lets play prev ');
  })

});
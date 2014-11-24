var Hapi = require('hapi');
var server = new Hapi.Server('localhost', 3000);
var socketio = require("socket.io");
var io = socketio(server.listener);
var twilio = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

// Serve static assets
server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: { path: './public', listing: false, index: true }
  }
});

// When a socket connects, set up the specific listeners we will use.
io.on('connection', function(socket){
  // When a client tries to join a room, only allow them if they are first or
  // second in the room. Otherwise it is full.
  socket.on('join', function(room){
    var clients = io.sockets.adapter.rooms[room];
    var numClients = (typeof clients !== 'undefined') ? Object.keys(clients).length : 0;
    if(numClients == 0){
      socket.join(room);
    }else if(numClients == 1){
      socket.join(room);
      // When the client is second to join the room, both clients are ready.
      socket.emit('ready', room);
      socket.broadcast.emit('ready', room);
    }else{
      socket.emit('full', room);
    }
  });

  // When receiving the token message, use the Twilio REST API to request an
  // token to get ephemeral credentials to use the TURN server.
  socket.on('token', function(){
    twilio.tokens.create(function(err, response){
      if(err){
        console.log(err);
      }else{
        // Return the token to the browser.
        socket.emit('token', response);
      }
    });
  });

  // Relay candidate messages
  socket.on('candidate', function(candidate){
    socket.broadcast.emit('candidate', candidate);
  });

  // Relay offers
  socket.on('offer', function(offer){
    socket.broadcast.emit('offer', offer);
  });

  // Relay answers
  socket.on('answer', function(answer){
    socket.broadcast.emit('answer', answer);
  });
});

// Start the server
server.start(function () {
  console.log('Server running at:', server.info.uri);
});

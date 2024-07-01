import { createServer } from 'node:http';
import { Server } from 'socket.io';

const server = createServer();
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
    },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('send-message', (message, room) => {
    const roomTrimed = room.trim()
    console.log('message: ', message);
    // why we use io.emit instead of socket.emit?
    // we use io.emit to send the message to all connected clients
    // if we use socket.emit, the message will only be sent to the client that sent the message
    if (roomTrimed === "") {
        // send to all user connected
        socket.broadcast.emit('receive-message', message);
    } else {
        socket.to(roomTrimed).emit('receive-message', message);
    }
  });

  socket.on('join-room', (room) => {
    console.log('current room: ', room);
    socket.join(room);
  });

  socket.on('leave-room', () => {
    console.log('leave the room')
    console.log(socket)
  })
});

server.listen(3000, () => {
  {
    console.log('server is listening on port 3000');
  }
});

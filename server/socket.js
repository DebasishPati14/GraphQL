let io;

module.exports = {
  init: (httpServer) => {
    io = require('socket.io')(httpServer, {
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
      },
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      return new Error('Socket is not connected');
    }
    return io;
  },
};

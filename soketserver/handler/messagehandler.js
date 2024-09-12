import { handleSendMessage } from '../event/message.js';

const messageHandler = (socket, io) => {
    // Handle sending and receiving messages
    socket.on('sendMessage', (message) => handleSendMessage(socket, io, message));
};

export default messageHandler;

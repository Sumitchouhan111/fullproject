export const handleSendMessage = (socket, io, message) => {
    console.log('Message received:', message);
    io.emit('receiveMessage', message); // Broadcast message to all users
};

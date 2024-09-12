import {
    handleLikeNotification,
    handleCommentNotification,
    handleFollowNotification,
} from '../event/notification.js';

const notificationHandler = (socket, io) => {
    // Handle sending notifications
    socket.on('sendLikeNotification', (data) => handleLikeNotification(socket, io, data));
    socket.on('sendCommentNotification', (data) => handleCommentNotification(socket, io, data));
    socket.on('sendFollowNotification', (data) => handleFollowNotification(socket, io, data));
};

export default notificationHandler;

export const handleLikeNotification = (socket, io, data) => {
    console.log('Like Notification:', data);
    io.emit('receiveLikeNotification', data);
};

export const handleCommentNotification = (socket, io, data) => {
    console.log('Comment Notification:', data);
    io.emit('receiveCommentNotification', data);
};

export const handleFollowNotification = (socket, io, data) => {
    console.log('Follow Notification:', data);
    io.emit('receiveFollowNotification', data);
};

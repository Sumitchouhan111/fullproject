import express from 'express';
import { Server } from 'socket.io';
import { PORT } from './config/config.js';
import messageHandler from './handler/messagehandler.js';
import notificationHandler from './handler/notificationhandler.js';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", 
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});


app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    
    messageHandler(socket, io);

   
    notificationHandler(socket, io);

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

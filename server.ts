// a simple express node ts api server

import express from 'express';
import { Request, Response } from 'express';
import { createServer } from 'http';

const app = express();
const port = 3000;
app.use(express.json());
//static setup
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// Post method with query parameters for chatId
app.post('/saveChat', (req: Request, res: Response) => {
    const chat = req.body
    res.send('Chat saved!');
});

app.get('/getChat/:', (req: Request, res: Response) => {
    // Get the chat from the database
    // Return the chat
    res.send('Chat retrieved!');
});

const server = createServer(app);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
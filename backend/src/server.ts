import express, {Request, Response, Application} from 'express'
import chats  from "./data/data";

const app : Application = express();
    
app.get('/', (req : Request, res : Response) => {
    res.send("Hello");
})
app.get('/api/chat', (req,res) => {
    res.send(chats);
})
app.get('/api/chat/:id', (req,res) => {
    const chat = chats.find(c => c.id === req.params.id);
    res.send(chat);
})
app.listen(5000, () => {
    console.log("Server is listening");
})

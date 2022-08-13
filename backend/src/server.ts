import express, {Request, Response, Application} from 'express'
import chats  from "./data/data";
const mongoose = require('mongoose');
import {userRouter} from './routes/userRoutes'
import bodyParser from 'body-parser'

mongoose.connect('mongodb://localhost/chat', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('open', ()=> console.log('Connected to database'))

const app : Application = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
    
app.get('/', (req : Request, res : Response) => {
    res.send("Hello");
})
app.get('/api/chats', (req,res) => {
    res.send(chats);
})
app.get('/api/chats/:id', (req,res) => {
    const chat = chats.find(c => c.id === req.params.id);
    res.send(chat);
})
app.use('/api/user', userRouter);
app.listen(5000, () => {
    console.log("Server is listening");
})

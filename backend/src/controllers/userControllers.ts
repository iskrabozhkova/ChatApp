import express, {Request, Response, Application} from 'express'
import User, {IUser} from '../models/userModel'

export const register = async (req : Request,res : Response) => {
    const {username, password, photo} = req.body;

    if(!username || !password){
        res.status(400).send("All fields should be filled!");
    }
    const userExists = await User.findOne({username});
    if(userExists){
        res.status(400).send("User with this username already exists");
    }
    const user : IUser = await User.create({
        username,
        password,
        photo
    })
    if(user){
        res.status(201).json({
            username: user.username,
            password: user.password,
            photo: user.photo
        })
    }else{
        res.status(400).send("Failed to create user");
    }
}
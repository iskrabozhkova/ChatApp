import { model, Schema, Model, Types } from 'mongoose';

interface IUser extends Document {
    name: string,
    password: string,
    email: string,
    photo: string
}

const UserSchema: Schema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    photo: {type: String, required: true}
},
{
  timestamps: true
});

export default model<IUser>('User', UserSchema);
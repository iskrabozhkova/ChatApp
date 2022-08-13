import { model, Schema} from 'mongoose';

export interface IUser extends Document {
    username: string,
    password: string,
    photo: string
}

const UserSchema: Schema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String, required: true}
},
{
  timestamps: true
});

export default model<IUser>('User', UserSchema);
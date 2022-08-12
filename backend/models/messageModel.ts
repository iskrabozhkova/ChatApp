import { model, Schema, Model, Types } from 'mongoose';

interface IMessage extends Document {
  sender: Types.ObjectId,
  content: string,
  chat: Types.ObjectId,
}

const MessageSchema: Schema = new Schema({
  sender: {type: Schema.Types.ObjectId, ref: 'User'},
  content: {type: String},
  chat: {type: Schema.Types.ObjectId, ref: 'User'},
},
{
  timestamps: true
});

export default model<IMessage>('Message', MessageSchema);

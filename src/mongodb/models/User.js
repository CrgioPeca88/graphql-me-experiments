// Dependencies
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: String,
  nickname: String
});

export default model('User', userSchema);

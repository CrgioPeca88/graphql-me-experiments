// Dependencies
import mongoose from 'mongoose';

export async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb://localhost/mongodbgql-experiments', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('==> OK, Connected to MongoDB Database!');
  } catch(err) {
    console.log('==> ERROR, Failed connection to MongoDB Database!');
    console.log('==>', err);
  }
}

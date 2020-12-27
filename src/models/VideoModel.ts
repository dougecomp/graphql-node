import mongoose from 'mongoose'

interface IMongooseVideoDocument extends mongoose.Document {
  name: string;

  description: string;

  category: mongoose.Schema.Types.ObjectId;
}

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories'
  }
})

const VideoModel = mongoose.model<IMongooseVideoDocument>('Videos', Schema)

export { VideoModel }

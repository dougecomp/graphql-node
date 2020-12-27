import mongoose from 'mongoose'

interface IMongooseCategoryDocument extends mongoose.Document {
  name: string;
  description: string;
}

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const CategoryModel = mongoose.model<IMongooseCategoryDocument>('Categories', Schema)

export { CategoryModel }

import mongoose from 'mongoose'

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

const CategoryModel = mongoose.model('Categories', Schema)

export { CategoryModel }

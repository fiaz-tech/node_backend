import mongoose from 'mongoose'

const emailSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },   
  },
  {
    timestamps: true,
  }
)

const emailCollector = mongoose.model('emailCollector', emailSchema)

export default emailCollector;

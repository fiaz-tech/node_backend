import mongoose from 'mongoose'

const appVisitorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    
    },
    
  },
  {
    timestamps: true,
  }
)

const appVisitor = mongoose.model('appVisitor', appVisitorSchema)

export default appVisitor

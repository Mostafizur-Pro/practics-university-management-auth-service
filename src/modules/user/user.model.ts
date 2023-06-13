import { Model, Schema, model } from 'mongoose'
import { IUser } from './user.interface'

// model
type UserModel = Model<IUser, object>

// schema
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  //   createdAt & updatedAt
  {
    timestamps: true,
  }
)
export const User = model<IUser, UserModel>('User', userSchema)

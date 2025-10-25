import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: false },
    password: { type: String, required: true },
    tenantId: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
    trim: true,   
  },
  socialHandle: {
    type: String,
    required: true, 
    trim: true,    
  },
  
  imageUrls: {
    type: [String],  
    default: [],    
  }
}, {
  timestamps: true 
});

const User = mongoose.model('User', userSchema);

export default User;

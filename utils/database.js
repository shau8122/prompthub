import mongoose from "mongoose"
// mongoose.set('bufferCommands', false);
let isConnected =false;

export const connectToDB =async ()=>{
  mongoose.set('strictQuery',true);
  if(isConnected){
    console.log('MonogDB is already connected')
    return ;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI,{
      dbName:'sharePrompt',
      useNewUrlParser:true,
      useUnifiedTopology:true,
    })
    isConnected=true;
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error; 
  }
}

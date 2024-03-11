import mongoose from "mongoose"

const connectionToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("db connected successfully")
    } catch (error) {
        console.log("db connected get error ",error.message)
        
    }
}

export default connectionToDatabase;
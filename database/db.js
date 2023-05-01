import mongoose from "mongoose"

const Connection = async (DBurl) => {

    try {
        await mongoose.connect(DBurl, { useNewUrlParser:true });
        console.log("Database connected Successfully")
    } catch (error) {
        console.log("Error while connecting with the database", error)
    }
}

export default Connection;
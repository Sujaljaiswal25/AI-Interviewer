import moongoose from "mongoose";


function connectDB() {
    moongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    }
    ).catch((err) => {
        console.log("Error connecting to MongoDB", err);
    }
    )
}


export default connectDB;
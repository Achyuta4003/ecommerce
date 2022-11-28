import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("connected to DB...");
    }).catch(err => {
        console.log(err.message);
    })
};
export default connectDatabase;
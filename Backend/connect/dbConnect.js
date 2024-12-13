import mongoose from "mongoose";

export const Connect = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://Gezsh:21a74b28c34d@cluster0.wgpztnq.mongodb.net/vehicle?retryWrites=true&w=majority&appName=Cluster0",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

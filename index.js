import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import authenticateUser from "./middlewares/authentication.js";
import productRouter from "./routers/productRouter.js";

const app = express();


const mongodbURI = "mongodb+srv://admin:1234@cluster0.vefzq4k.mongodb.net/icomputers?appName=Cluster0"

mongoose.connect(mongodbURI).then(
    ()=>{
        console.log("Connected to MongoDB");
    }
)

app.use( express.json() )

app.use(authenticateUser)

app.use("/users",userRouter)
app.use("/products",productRouter)


app.listen(5000, (req,res) => {
	console.log("Server is running on port 5000");
});

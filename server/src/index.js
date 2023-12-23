
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";


dotenv.config({
    path: './.env'
})

connectDB()
try {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` ⚙️  Server is running at Port: ${process.env.PORT}`);
    })
} catch (error) {
    console.log("MongoDB connection failed !!", error)
}


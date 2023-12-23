import mongoose, {Schema} from "mongoose";
import autoIncrement from "mongoose-auto-increment"


const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "name is required" ],
        trim: true,
    },
    username:{
        type : String,
        required: [true, "username is required" ],
        lowercase: true,
        unique: true,
        trim: true,
    },
    email:{
        type : String,
        required: [true, "email is required" ],
        lowercase: true,
        unique: true,
        trim: true,
    },
    phone:{
        type: Number,
        required: [true, "phone number is required" ],
        unique: true
    },
},{timestamps: true})


// // Ensure the mongoose connection is established before using autoIncrement
const connection = mongoose.createConnection(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
autoIncrement.initialize(connection);

// // Add error handling for autoIncrement initialization if needed
autoIncrement.initialize(connection, (error) => {
    if (error) {
        console.error("Error initializing autoIncrement:", error);
    } else {
        console.log("autoIncrement initialized successfully");
    }
});

var User = mongoose.model("User", userSchema)


// userSchema.plugin( autoIncrement.plugin, { model: 'User', field: 'userId' });

// userSchema.plugin(autoIncrement.plugin, "User");


 export { User }
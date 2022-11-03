import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {type: String, require: true},
    password: {type: String, required: true},
    id: {type: String}
})


export default mongoose.model("UserModal", userSchema);
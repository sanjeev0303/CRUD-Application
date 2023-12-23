import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../model/user.model.js";





const addUser = asyncHandler(async(req, res) => {

    const user = req.body;

    try {
        const newUser = new User(user);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        throw new ApiError(500, "Server error occurred while creating user")
    }

});

const getUsers = asyncHandler( async (req, res) => {
try {
    const users = await User.find({})
    res.status(200).json(users);
} catch (error) {
    throw new ApiError(404, "Not found")
}
})


const getUser = asyncHandler( async (req, res) => {
  
    try {
        // const user = await User.find({ _id: req.params.id })
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    } catch (error) {
        throw new ApiError(404, "Not found")
    }
} )


const editUser = asyncHandler( async (req, res) => {
let user = req.body;
const editUser = new User(user);

try {
    await User.updateOne({_id: req.params.id}, editUser)
    res.status(201).json(editUser)
} catch (error) {
    res.status(409).json({message: error.message})
}
} )


const deleteUser = asyncHandler( async (req, res) => {
try {
    await User.deleteOne({_id: req.params.id})
    res.status(200).json({message: 'User deleted successfully'})
} catch (error) {
    res.status(409).json({message: error.message})
}
} )








export { addUser, getUsers, getUser, editUser, deleteUser }
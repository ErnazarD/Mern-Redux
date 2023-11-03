import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
// @desc  Auth user/set token 
// route POST /api/users/auth
// @access Public
const authUser =  asyncHandler(async (req, res) => {
    // const users = [
    //     {
    //         id: 1,
    //         name: "Don",
    //         position: "C",
    //         email: "don@gmail.com"
    //     },
    //     {
    //         id: 2,
    //         name: "era",
    //         email: "era@gmail.com"
    //     }
    // ]
    //  res.status(200).json({user:users[0]})
    res.status(200).json({ message: 'Auth User'});
})

// @desc  Register New User
// route POST /api/users
// @access Public
const registerUser =  asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Register User'});
});

// @desc  Logout User 
// route POST /api/users/logout
// @access Public
const logoutUser =  asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout User'})
})

// @desc  Get User prifile
// route Get /api/users/profile
// @access Private
const getUserProfile =  asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile'})
})
// @desc  Update User profile
// route PUT /api/users/profile
// @access Private
const updateUserProfile =  asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update User Profile'})
})

export { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};
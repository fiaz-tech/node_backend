import asyncHandler from 'express-async-handler'

import appVisitor from '../models/appUserModel.js'
import emailCollector from '../models/emailModel.js'


// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const postAppUser = asyncHandler(async (req, res) => {

  const { name, email, subject, message} = req.body


  const user = await appVisitor.create({
    name,
    email,
    subject,
    message,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      subject: user.subject,
      message: user.message,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})


// @desc    Get app users
// @route   get /api/appUsers
// @access  Public
const getAppUsers = asyncHandler(async (req, res) => {
  const users = await appVisitor.find({})
  if(users){
    res.status(200).json({
      message: "App users fetched successfully",
      users: users
    })
  }else{
    res.status(400)
    throw new Error('Get request failed')
}
})

// @desc    Register a new email
// @route   POST /api/users
// @access  Public
const postEmails = asyncHandler(async (req, res) => {

  const { email } = req.body

  const user = await emailCollector.create({
    
    email,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid email')
  }
})



export {
  postAppUser,
  getAppUsers,
  postEmails,

}




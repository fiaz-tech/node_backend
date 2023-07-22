import { postAppUser, getAppUsers, postEmails } from '../controllers/appUserControllers.js'
 import express from 'express'
const router = express.Router()

router.route('/post').post(postAppUser)
router.route('/users').get(getAppUsers)
router.route('/postemail').post(postEmails)

export default router

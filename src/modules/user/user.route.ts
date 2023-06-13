import express from 'express'
import userController from './user.controller'

const router = express.Router()
// create new user
//
router.post('/create-user', userController.createUser)
// localhost: 5000 app.ts file a

export const UserRoute = router

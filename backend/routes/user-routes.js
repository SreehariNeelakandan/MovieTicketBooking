import { getAllUsers,signUp,updateUser,deleteUser,login, getBookingOfUser } from "../controllers/user-controller"
import express from 'express'

const userRouter=express.Router()

userRouter.get("/",getAllUsers)
userRouter.post("/signup",signUp)
userRouter.put("/:id",updateUser)
userRouter.delete("/:id",deleteUser)
userRouter.post("/login",login)
userRouter.get("/bookings/:id",getBookingOfUser)


export default userRouter
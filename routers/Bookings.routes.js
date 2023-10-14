const express = require("express")

const BookingsRouter = express.Router()

BookingsRouter.get("/",(req,res,next)=>{
    return res.status(200).json({
        message:"fetched all Bookings",
        data:[],
    })
})

BookingsRouter.get("/:id",(req,res,next)=>{
    return res.status(200).json({
        message:"fetched a Booking",
        data:[],
    })
})

BookingsRouter.post("/create",(req,res,next)=>{
    return res.status(200).json({
        message:"booking created successfully",
    })
})

BookingsRouter.put("/update/:id",(req,res,next)=>{
    return res.status(200).json({
        message:"booking updated successfully",
    })
})

BookingsRouter.delete("/delete/:id",(req,res,next)=>{
    return res.status(200).json({
        message:"booking deleted successfully"
    })
})

module.exports = BookingsRouter
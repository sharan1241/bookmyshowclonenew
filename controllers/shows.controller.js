
const ShowsModel = require("../models/shows.model")
const { response } = require("../services/service")

ShowsModel

async function getAllShows(req,res,next){
    try {
        const response = await ShowsModel.find()
    
    if(response && response.length>0){
        return res.status(200).json({
            success:true,
            message:"fetched all shows",
            data:response,
        })
    }else{
        return res.status(200).json({
            success:true,
            message:"no shows found",
            data:[],
        })
    }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error:error.message,
            message:"something went wrong"
        })
    }
}

function getAShow(req,res,next){
    const { showId } = req.params;
    if(showId.length!=24){
        return res.status(400).json({
            success:false,
            error:"object id is invalid"
        })
    }
    ShowsModel.findById({ _id:showId }).then((response)=>{
        if(response && response._id){
            return res.status(200).json({
                message:"fetched a show",
                data:response,
            })
        }else{
            return res.status(200).json({
                message:"no show found",
                data:response,
            })
        }
    }).catch((error)=>{
        return res.status(400).json({
            success: false,
            error:error.message,
            message:"something went wrong"
        })
    })
}

function createAShow(req,res,next){
    const Show = new ShowsModel(req.body)
    Show.save().then((response)=>{
        if(response && response._id){
            return res.status(200).json({
                success: true,
                message:"creating new show successful",
                data: response
            })
        }else{
            return res.status(400).json({
                success: false,
                message:"creating show unsuccessful"
            })
        }
    }).catch((error)=>{
        return res.status(400).json({
            success: false,
            error:error.message,
            message:"something went wrong"
        })
    })
    
}

module.exports = {
    getAShow,
    getAllShows,
    createAShow
}
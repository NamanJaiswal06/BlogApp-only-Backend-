const post = require("../models/post")

exports.createpost = async(req , res)=>{
    try{
        const {title , body } = req.body;

        const response = await post.create({title , body})

        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        })
    }
    catch(err){
         console.error(err)
        console.log(err)
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message ,


        })

    }
}


exports.getAllPosts = async (req , res)=>{
    try{

        const posts = await post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,

        })


    }
    catch(err){
         console.error(err)
        console.log(err)
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message ,


        })


    }
}
const Post = require("../models/post")
const Like = require("../models/like")

exports.likepost = async (req , res)=>{
    try{
        const {post , user} = req.body;
        const like = new Like({
            post , user
        })
        const savedLike = await like.save()

        //update the post collection basiss on this

        const updatePost = await Post.findByIdAndUpdate(post , {$push:{likes:savedLike._id}} , {new:true})
        .populate("likes").exec()

        res.json({
            post:updatedPost,
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


//unlike post

exports.unlikePost = async (req , res)=>{
    try{
        const {post , like} = req.body;

        const deletedLike = await Like.findOneAndDelete({post:post , _id:like});

        //update the post collection 
        const updatedPost = await  Post.findByIdAndUpdate(post , 
            {$pull:{likes:deletedLike._id} },{new :true} )

        res.json({
            post:updatedPost,
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
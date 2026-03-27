const Post = require("../models/post")
const Comment = require("../models/comment")


//bussiness logic

exports.createComment = async (req , res)=>{
    try{

        //fetch data from req body
        const {post , user , body} = req.body;
        const comment = new Comment({
            post,user,body
        });

        //save into the database
        const savedComment = await comment.save();

        //find the post by ID , add the new Comment
        const updatePost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new:true})
                                    .populate("comments") //populate the comments array with comment documents
                                    .exec();

                                    res.json({
                                        post:updatePost,
                                    });


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
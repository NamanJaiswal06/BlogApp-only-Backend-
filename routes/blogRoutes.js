const express = require("express")
const router = express.Router()

const {createpost , getAllPosts} = require("../controllers/createPost")
const {dummycontroller} = require("../controllers/dummy")
const {createComment} = require("../controllers/commentController")
const {likepost , unlikePost} = require("../controllers/updatelikes")






router.post("/posts/createPost" , createpost)
router.get("/posts", getAllPosts )
router.get("/dummy" ,dummycontroller )
router.post("/comments/create" , createComment)
router.post("/likes/like" , likepost)

router.post("/likes/unlike" , unlikePost)






module.exports = router;





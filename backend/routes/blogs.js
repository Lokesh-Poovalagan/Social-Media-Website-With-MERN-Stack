const express = require('express')
const { getPosts, newPost, getPost, updatePost, deletePost } = require('../controller/blogsController')
const router = express.Router()

router.route('/posts').get(getPosts)
router.route('/post/new').post(newPost)
router.route('/post/:id').get(getPost)
                         .put(updatePost)
                         .delete(deletePost)   

module.exports=router
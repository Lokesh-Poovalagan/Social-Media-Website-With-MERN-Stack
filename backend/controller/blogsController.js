const post = require('../model/postModel')

//get posts - api/v1/posts
exports.getPosts=async(req,res,next)=>{
    const posts =await post.find()
    res.status(200).json({
        success:true,
        posts
    })
}

//new post - api/v1/post/new
exports.newPost=async(req,res,next)=>{
    const posts =await post.create(req.body)
    res.status(200).json({
        success:true,
        posts
    })
}

//get Single Post - api/v1/post/:id 
exports.getPost=async(req,res,next)=>{
    const posts =await post.findById(req.params.id)
    res.status(200).json({
        success:true,
        posts
    })
}

//update Post - api/v1/post/:id 
exports.updatePost=async(req,res,next)=>{
    let posts =await post.findById(req.params.id).catch(error=>res.status(400).json({
        success:false,
        error:"No Post Found"
    }))
    posts=await post.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    });
    res.status(200).json({
        success:true,
        posts
    })
}

//delete Post - api/v1/post/:id
exports.deletePost=async(req,res,next)=>{
    let posts =await post.findById(req.params.id).catch(error=>res.status(400).json({
        success:false,
        error:"No Post Found"
    }))
    if(!posts){
        res.status(400).json({
            success:false,
            error:"No Post Found"
        })
    }
    await post.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success:true
    })
}
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true , "Please enter post Title"]
    },
    datetime:{
        type: Date,
        default: Date.now()
    },
    body:{
        type:String,
        required:[true , "Please enter post body"],
    }
})

const post = mongoose.model('Post',postSchema)

module.exports=post
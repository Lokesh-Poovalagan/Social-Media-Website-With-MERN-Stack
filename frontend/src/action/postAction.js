import axios from "axios"
import { createPostFail, createPostRequest, createPostSuccess, deletePostFail, deletePostRequest, deletePostSuccess, postFail, postRequest, postSuccess, updatePostFail, updatePostRequest, updatePostSuccess } from "../slice/postSlice"

export const getPost = (id) =>async(dispatch)=>{
    try{
        dispatch(postRequest())
        const {data} = await axios.get(`/api/v1/post/${id}`)
        dispatch(postSuccess(data))
    }
    catch(err){
        dispatch(postFail(err))
    }
}

export const deletePost = (id) =>async(dispatch)=>{
    try{
        dispatch(deletePostRequest())
        console.log(id)
        await axios.delete(`/api/v1/post/${id}`)
        dispatch(deletePostSuccess())
    }
    catch(err){
        dispatch(deletePostFail(err))
    }
}

export const newPost = (formData) =>async(dispatch)=>{
    try{
        dispatch(createPostRequest())
        const config={
            headers : {
                'Content-type':'application/json'
            }
        }
        const {data}=await axios.post(`/api/v1/post/new`,formData,config)
        console.log(data)
        dispatch(createPostSuccess(data))
    }
    catch(err){
        dispatch(createPostFail(err))
    }
}

export const updatePost = (id,formData) =>async(dispatch)=>{
    try{
        dispatch(updatePostRequest())
        const config={
            headers : {
                'Content-type':'application/json'
            }
        }
        const {data}=await axios.put(`/api/v1/post/${id}`,formData,config)
        console.log(data)
        dispatch(updatePostSuccess(data))
    }
    catch(err){
        dispatch(updatePostFail(err))
    }
}
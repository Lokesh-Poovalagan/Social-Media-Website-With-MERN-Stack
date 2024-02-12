import axios from "axios"
import { postsFail, postsRequest, postsSuccess } from "../slice/postsSlice"

export const getPosts = (id) =>async(dispatch)=>{
    try{
        dispatch(postsRequest())
        const {data} = await axios.get(`/api/v1/posts`)
        dispatch(postsSuccess(data))
    }
    catch(err){
        dispatch(postsFail(err))
    }
}
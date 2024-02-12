import {createSlice} from "@reduxjs/toolkit"

const postsSlice = createSlice({
    name:"posts",
    initialState:{
        loading:false,
        posts:[]
    },
    reducers:{
        postsRequest(state,action){
            return{
                ...state,
                loading:true            
            }
        },
        postsSuccess(state,action){
            return{
                ...state,
                loading:false,
                posts:action.payload.posts
            }
        },
        postsFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload.error
            }
        }
    }
})

const {actions,reducer} = postsSlice

export const {postsRequest,postsSuccess,postsFail}=actions

export default reducer
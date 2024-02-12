import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newPost } from "./action/postAction";
import { useDispatch } from "react-redux";
import { getPosts } from "./action/postsAction";

const NewPost = () => {
    const [postTitle,setPostTitle]=useState("")
    const [postBody,setPostBody]=useState("")
    const navigate = useNavigate()
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append("title",postTitle)
        formData.append("body",postBody)
        dispatch(newPost(formData))
        dispatch(getPosts())
        navigate('/')
    }
    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost
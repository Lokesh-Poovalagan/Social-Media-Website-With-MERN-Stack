import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPost, updatePost } from "./action/postAction";
import { getPosts } from "./action/postsAction";
import Loader from "./Loader";

const EditPost = () => {
    const { id } = useParams();
    const {posts,loading,ispostDeleted}=useSelector((state)=>state.postState)
    const dispatch=useDispatch()
    const [editTitle,setEditTitle]=useState("")
    const [editBody,setEditBody]=useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getPost(id))
    },[dispatch])

    const handleEdit = () => {
        const formData = new FormData()
        formData.append("title",editTitle)
        formData.append("body",editBody)
        dispatch(updatePost(posts._id,formData))
        setEditTitle('');
        setEditBody('');
        dispatch(getPosts())
        navigate('/')
      }
      

    useEffect(() => {
        if (posts) {
            setEditTitle(posts.title);
            setEditBody(posts.body);
        }
    }, [posts, setEditTitle, setEditBody])



    return (
        <>
            {loading?<Loader/>:
            <main className="NewPost">
                {editTitle &&
                    <>
                        <h2>Edit Post</h2>
                        <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="postTitle">Title:</label>
                            <input
                                id="postTitle"
                                type="text"
                                required
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <label htmlFor="postBody">Post:</label>
                            <textarea
                                id="postBody"
                                required
                                value={editBody}
                                onChange={(e) => setEditBody(e.target.value)}
                            />
                            <button type="submit" onClick={() => handleEdit()}>Submit</button>
                        </form>
                    </>
                }
                {!editTitle &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </main>}
        </>
    )
}

export default EditPost
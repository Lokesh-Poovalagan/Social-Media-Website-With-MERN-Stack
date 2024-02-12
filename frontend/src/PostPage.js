import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { deletePost, getPost } from "./action/postAction";
import { getPosts } from "./action/postsAction";
import { clearPostCreated } from "./slice/postSlice";
import { toast} from "react-toastify"
import Loader from "./Loader";

const PostPage = () => {
    const { id } = useParams();
    const {posts,loading,ispostDeleted}=useSelector((state)=>state.postState)
    const dispatch=useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getPost(id))
    },[dispatch])

    const handleDelete = (id) => {
        dispatch(deletePost(id))
        dispatch(getPosts())
        navigate('/')
    
} 

    return (
        <>{loading?<Loader/>:
            <main className="PostPage">
                <article className="post">
                    {posts &&
                        <>
                            <h2>{posts.title}</h2>
                            <p className="postDate">{posts.datetime}</p>
                            <p className="postBody">{posts.body}</p>
                            <Link to={`/post/edit/${posts._id}`}><button className="editButton">Edit Post</button></Link>
                            <button className="deleteButton" onClick={() => handleDelete(posts._id)}>
                                Delete Post
                            </button>
                        </>
                    }
                    {!posts &&
                        <>
                            <h2>Post Not Found</h2>
                            <p>Well, that's disappointing.</p>
                            <p>
                                <Link to='/'>Visit Our Homepage</Link>
                            </p>
                        </>
                    }
                </article>
            </main>}
        </>
    )
}

export default PostPage
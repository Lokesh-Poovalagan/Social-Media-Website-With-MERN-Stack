import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import Header from './Header';
import {Route,Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import useWindowSize from './hooks/useWindowSize';
import EditPost from './EditPost';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './action/postsAction';
import Loader from './Loader';

function App() {
  const {posts,loading}=useSelector(state=>state.postsState)
  const dispatch=useDispatch()
  const [search,setSearch] = useState('')
  const [searchResult,setSearchResult] = useState('')
  const {width} = useWindowSize()
  
  useEffect(() => {
    const filteredResult = posts.filter((post) =>
    ((post.body).toLowerCase()).includes(search.toLowerCase())||((post.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchResult(filteredResult.reverse());
    
  },[posts,search])
  
  useEffect(()=>{
    dispatch(getPosts())
    console.log(posts)
  },[dispatch])
    
  return (   
    <>
      {loading?<Loader/>:
      <div className='App'>   
        <Header title="Social Media App" width={width}/>
        <Nav 
          search={search}
          setSearch={setSearch}/>
          <Routes>
            <Route path="/" element = {<Home posts={searchResult}/>}/>
            <Route path="post"> 
              <Route index element = {<NewPost />}/>
              <Route path=":id" element={<PostPage />}/> 
              <Route path="edit/:id" element = {<EditPost />}/>
              </Route>
            <Route path="about" element = {<About/>}/>
            <Route path="*" element = {<Missing/>}/>
        </Routes>
        <Footer/>  
      </div>}
    </>
  );

  }
export default App

import React, { useEffect, useMemo, useState } from 'react';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import PostSort from './Components/PostSort';
import MyButton from './Components/UI/button/MyButton';
import ModalWindow from './Components/UI/ModalWindow/ModalWindow';
import MySelect from './Components/UI/select/MySelect';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';
import axios from 'axios';
import PostService from './API/PostService';
import Loader from './Components/UI/Loader/Loader';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
 
  var axios = require('axios');

  useEffect(()=>{
    fetchPosts();
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  async function fetchPosts(){
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts)
    setIsPostsLoading(false);
  }



  return (
    <div className="App">
      <MyButton onClick={()=> setModal(true)} style={{margin: "20px 0px 10px 0px"}}>Создать пост</MyButton>
      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalWindow>
      <PostSort filter={filter} setFilter={setFilter} />
      {isPostsLoading 
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}> <Loader/> </div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов" />
      }
      

    </div>

  );

}

export default App;

import React, { useMemo, useState } from 'react';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import PostSort from './Components/PostSort';
import MyButton from './Components/UI/button/MyButton';
import ModalWindow from './Components/UI/ModalWindow/ModalWindow';
import MySelect from './Components/UI/select/MySelect';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "JS - best language" },
    { id: 2, title: "Python", body: "Python - best language" },
    { id: 3, title: "C++", body: "C++ - best language" },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [modal, setModal] = useState(false);

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
 

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }




  return (
    <div className="App">
      <MyButton onClick={()=> setModal(true)} style={{margin: "20px 0px 10px 0px"}}>Создать пост</MyButton>
      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalWindow>

      <PostSort filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов" />

    </div>

  );

}

export default App;

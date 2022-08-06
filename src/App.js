import React, { useState } from 'react';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import MySelect from './Components/UI/select/MySelect';
import './styles/App.css';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "JS - best language" },
    { id: 2, title: "Python", body: "Python - best language" },
    { id: 3, title: "C++", body: "C++ - best language" },
  ]);
  const [selectSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort) =>{
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))

  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <MySelect value={selectSort}
      onChange={sortPosts}
       defaultValue="Сортировка" options={[
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'},
      ]}/>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title = "Список постов"/>
        : <h1 style={{textAlign: "center"}}>Посты не были найдены!</h1>
      }
    </div>

  );

}

export default App;

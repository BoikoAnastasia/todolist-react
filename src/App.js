import React, { useState } from 'react';
import PostList from './Components/PostList';
import Button from './Components/UI/Button';
import Input from './Components/UI/Input';
import './styles/App.css';


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "JS - best language" },
    { id: 2, title: "Python", body: "Python - best language" },
    { id: 3, title: "C++", body: "C++ - best language" },
  ]);
  const [title, titleChange]  = useState('');
  const [body, bodyChange]  = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
        <form >
          <input type="text" placeholder="Введите название поста" 
          value={title} 
          onChange={e => titleChange(e.target.value)}
          />
          <input type="text" placeholder="Введите название поста"
          value={body} 
          onChange={e => bodyChange(e.target.value)} />
          <button type="submit" onClick={addNewPost}>Добавить</button>
        </form>
        <h1>Список постов</h1>
        <PostList posts={posts} />
    </div>
  );
  
}

export default App;

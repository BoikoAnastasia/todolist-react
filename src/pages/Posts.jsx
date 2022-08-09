// 
import PostForm from '../Components/PostForm';
import PostList from '../Components/PostList';
import PostSort from '../Components/PostSort';
import MyButton from '../Components/UI/button/MyButton';
import ModalWindow from '../Components/UI/ModalWindow/ModalWindow';
// 
import '../styles/App.css';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArr } from '../utils/pages';
import Pagination from '../Components/UI/pagination/Pagination';
import React, { useEffect, useMemo, useState } from 'react';
import { usePosts } from '../hooks/usePosts';



function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);


  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const pageChange = (page)=>{
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} style={{ margin: "20px 0px 10px 0px" }}>Создать пост</MyButton>
      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalWindow>
      <PostSort filter={filter} setFilter={setFilter} />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}> <Loader /> </div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов" />
      }
    <Pagination page={page} pageChange={pageChange} totalPages={totalPages}/>
    </div>

  );

}

export default Posts;

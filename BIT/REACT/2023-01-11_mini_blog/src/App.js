import { useEffect } from 'react';
import Head from './components/head/head';
import Blog from './components/blog/blog';
import NewPost from './components/newpost/NewPost';
import blogs from './components/resourses/initialcode.json';


function App() {

  const postsArray = JSON.parse(localStorage.getItem('posts'));
    if (!postsArray){
      localStorage.setItem('posts', JSON.stringify(blogs));
    }

  return (
    <>
      <Head />
      <Blog />
      <NewPost />
    </>  
  );
}

export default App;

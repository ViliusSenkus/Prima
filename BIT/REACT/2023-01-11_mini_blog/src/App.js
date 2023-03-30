import Head from './components/head/head';
import Blog from './components/blog/blog';
import NewPost from './components/newpost/NewPost';
import blogs from './components/resourses/initialcode.json';
import Context from './context/Context';
import { useState, useEffect } from 'react';


function App() {

  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{console.log("perkraunam")}, [refresh])

  const postsArray = JSON.parse(localStorage.getItem('posts'));
    if (!postsArray){
      localStorage.setItem('posts', JSON.stringify(blogs));
    }

  const contextValues = {refresh, setRefresh};

  return (
    <Context.Provider value={contextValues}>
      <Head />
      <Blog />
      <NewPost />
    </Context.Provider>  
  );
}

export default App;

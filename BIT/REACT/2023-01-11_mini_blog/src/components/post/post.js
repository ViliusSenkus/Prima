import { useEffect, useState } from "react";

const Post = () => {
  
  const postsArray = JSON.parse(localStorage.getItem('posts'));

  const [deleted, setDeleted] =useState(false);

  useEffect (()=>{
    JSON.parse(localStorage.getItem('posts'))
  },[deleted])

  const deletePost = (id) => {
      postsArray.map((value, index)=>{
        if (value._id === id){
          postsArray.splice(index,1);
          setDeleted(!deleted);
        }
      });
    localStorage.setItem('posts', JSON.stringify(postsArray));
  }

  {console.log(postsArray)}
  return postsArray.map( i => <section className="post" key={i._id}>
                        <div className="wrapper">
                            <img src={i.image} alt="" className="image"></img>
                            <div className="category">{i.category}</div>
                        </div>

                        <div className="date">{i.date} / {i.comments}</div>
                        <div className="title">{i.title}</div>
                        <div className="content">{i.content}...</div>
                        <div className="nav">
                          <div className="continue">Continue reading →</div>
                          <div className="delete" onClick={ () => deletePost(i._id)}>X Delete post</div>
                        </div>
                    </section>)
                      
}
export {Post};

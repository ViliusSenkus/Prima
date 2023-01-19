import style from './newpost.module.css';
import { useState } from 'react';

const NewPost = () => {

        const[_id, setId]=useState();
        const[title, setTitle]=useState();
        const[category, setCategory]=useState();
        const[image, setImage]=useState();
        const[writeDate, setWriteDate]=useState();
        const[comments, setComments]=useState();
        const[content, setContent]=useState();
        const[post, setPost]=useState();

        const handlePost = () => {

        }

        return(
                <div id="new" className={style.newPost}>
                        <h3> Fill-inn form for the new post</h3>
                        <form onSubmit={handlePost}>
                                <div>
                                        <label>Post title</label>
                                        <input type="text" onChange={(e)=>e.target.value} />
                                </div>
                                <div>
                                        <label>Post category</label>
                                        <input type="text" onChange={(e)=>e.target.value} />
                                </div>
                                <div>
                                        <label>Picture link</label>
                                        <input type="web" onChange={(e)=>e.target.value} />
                                </div>
                                <div>
                                        <label>Write post</label>
                                        <textarea onChange={(e)=>e.target.value} rows={5}/>
                                </div>
                                <div>
                                        <button>Post</button>
                                        <a href="#top">Home</a>
                                </div>
                        </form>
                </div>
                
              
        )
}

export default NewPost;
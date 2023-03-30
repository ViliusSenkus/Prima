import style from './newpost.module.css';
import { useContext, useEffect } from 'react';
import Context from '../../context/Context';

const NewPost = () => {

        // const[_id, setId]=useState();
        const {refresh, setRefresh} = useContext(Context)

        const handlePost = (e) => {
                e.preventDefault();
                const data = new FormData(e.target);

                let list={}
            for (const x of data) {
                  list={...list, [x[0]] : x[1]};
            }
                let date=new Date(Date.now());
                date = date.toLocaleDateString();

                list={...list, 'date' : date}

                console.log(list);
        
                const postsArray = JSON.parse(localStorage.getItem('posts'));

                postsArray.push(list);
                localStorage.setItem('posts', JSON.stringify(postsArray));

                setRefresh(!refresh);
        }
        
//         const postsArray = JSON.parse(localStorage.getItem('posts'));

//         const [deleted, setDeleted] =useState(false);
    
    
//         const deletePost = (id) => {
//             console.log('clicked')
//             postsArray.map((value, index)=>{
//               if (value._id === id){
//                 postsArray.splice(index,1);
//                 setDeleted(!deleted);
//               }
//             });
    
//           localStorage.setItem('posts', JSON.stringify(postsArray));
//         }
    
//       useEffect (()=>{
//         JSON.parse(localStorage.getItem('posts'))
//       },[deleted])






        return(
                <div id="new" className={style.newPost}>
                        <h3> Fill-inn form for the new post</h3>
                        <form onSubmit={handlePost}>
                                <div>
                                        <label>Post title</label>
                                        <input type="text" name="title" onChange={(e)=>e.target.value} />
                                </div>
                                <div>
                                        <label>Post category</label>
                                        <input type="text" name="category" onChange={(e)=>e.target.value} />
                                </div>
                                <div>
                                        <label>Picture link</label>
                                        <input type="web" name="image" onChange={(e)=>e.target.value} />
                                </div>
                                <div>
                                        <label>Write post</label>
                                        <textarea name="content" onChange={(e)=>e.target.value} rows={5}/>
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
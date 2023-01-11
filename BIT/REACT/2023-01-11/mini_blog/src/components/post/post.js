import Blog from '../blog/blog';

const blog = Blog.map( i => {
    return (<>
            <section className="post" key={i._id}>
                <div key={i._id + "post"} className="wrapper">
                    <img src={i.image} alt="" className="image" key={i._id + "img"}></img>
                    <div className="category" key={i._id + "cat"}>{i.category}</div>
                </div>

                <div className="date" key={i._id + "date"}>{i.date} / {i.comments}</div>
                <div className="title" key={i._id + "title"}>{i.title}</div>
                <div className="content" key={i._id + "cont"}>{i.content}...</div>
                <div className="continue" key={i._id + "link"}>Continue reading →</div>
            </section>
            </>)
});


const Post = () => {
    return(
        <main key="mainkey">
                {blog}
        </main>
    )
}

export default Post;

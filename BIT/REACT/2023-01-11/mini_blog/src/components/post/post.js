import Blog from '../blog/blog';

const blog = Blog.map( i => {
    return (<section className="post" key={i._id}>
                <div className="wrapper">
                    <img src={i.image} alt="" className="image"></img>
                    <div className="category">{i.category}</div>
                </div>

                <div className="date">{i.date} / {i.comments}</div>
                <div className="title">{i.title}</div>
                <div className="content">{i.content}...</div>
                <div className="continue">Continue reading →</div>
            </section>)
});


const Post = () => {
    return(
        <main>
                {blog}
        </main>
    )
}

export default Post;

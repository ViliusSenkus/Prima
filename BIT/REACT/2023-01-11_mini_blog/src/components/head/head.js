import Default from '../resourses/initialcode.json';

const Head = () => {
    return (
        <header id="top">
            <div>
                <h1>
                    "Someon's Blog"
                </h1>
            </div>
            <button onClick={()=>{localStorage.setItem('posts', JSON.stringify(Default))}} className="reset">
                Reset to primary arrea
            </button>
            <a href="#new">Create New Post</a>
        </header>);
    }

export default Head;
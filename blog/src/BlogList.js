const BlogList = (props) =>{

    const blogs=props.blogs;
    const title=props.title;
    const handleDelete=props.handleDelete;

    return(
        <>
        <h3>{ props.title }</h3>
        <div className="blog-list">
             {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
        </>
    );
}

export default BlogList;
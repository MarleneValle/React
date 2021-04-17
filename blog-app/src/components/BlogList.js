import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {

    return (
        <div className="blog-list">
            <h2> { title }</h2>
            {blogs.map((blog) => (
                   <Link to={`/blogs/${blog.id}`}>
                    <div className="blog-preview"key= {blog.id} >
                        <div>
                            <h2>{ blog.title }</h2>
                            <p>Written by { blog.author }</p>
                        </div>    
                        <div className="links">  
                            <button onClick={() => handleDelete(blog.id)}>Read more...</button>
                        </div>
                    </div>
                   </Link>
           ))}
        </div>
     );
}
 
export default BlogList;
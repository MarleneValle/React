
import useFetch from '../costumizeHooks/useFetch'
import BlogList from './BlogList'

const Home = () => {

    const {data:blogs, isPending, error, handleDelete} = useFetch('http://localhost:8000/blogs');
   
    return (
        <div className="home">
           { error && <div>{ error }</div>} 
           { isPending && <div>Loading...</div> }
           {blogs &&  <BlogList blogs= {blogs}  title="All Posts" handleDelete={handleDelete}/>}
           {blogs &&  <BlogList blogs= {blogs.filter((blog) => blog.author === 'Marlene')}  title="Marlene's Blogs" handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;
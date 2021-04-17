import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            <Link to="/"><h1>Your secrets...</h1></Link>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Post</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;

import { NavLink} from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                {/* <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/posts">Posts</Link> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users" >Users</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>

        </div>
    );
};

export default Header;
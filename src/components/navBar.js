import { Link } from 'react-router-dom';
import '../styleSheets/navBar.css'
const NavBar = () => {
    return ( 
        <div className='navBars'>
            <div>
                <h2>CS-Blogs</h2>
            </div>
            <div className="nav-ele">
                <ul>
                    <li><Link to="./">Home</Link></li>
                    <li><Link to="#">All Books</Link></li>
                    <li><a href="/newBook">Add New Books</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default NavBar;
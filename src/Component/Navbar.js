import {Link} from 'react-router-dom'
import './index.css'
function Navbar() {
    return (
      <div className='nav'>
      <ul className='nav-element'>
      <li ><Link to='/'>Home</Link></li>
      <li><Link to='/create-post'>Create Post</Link></li>

      </ul>
     
      </div>
    );
  }
  
  export default Navbar;
  
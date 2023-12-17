import { Link } from 'react-router-dom';
import '../styles/nav-bar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="navbar-image"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="surrealEstateLogo"
      />
      <ul className='navbar-links'>
        <Link className="navbar-links-item" to='/'>
          View Properties
        </Link>
        <Link className="navbar-links-item" to='add-property'>
          Add a Property
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;

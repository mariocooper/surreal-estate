import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="navbar-image"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="surrealEstateLogo"
      />
      <ul>
        <Link className="navbar-links-item">
          View Properties
        </Link>
        <Link className="navbar-links-item">
          Add a Property
        </Link>
      </ul>
    </div>
  )
};

export default NavBar;

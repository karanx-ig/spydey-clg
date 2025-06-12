import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './Navbar.css';

function Navbar({ loggedIn, setLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
  };

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h1 >Spydey College </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/notices">Notices</Link></li>
        {loggedIn ? (
          <>
            <li><Link to="/admin">Admin</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
        <li><button onClick={toggleTheme} className="theme-toggle">Toggle Theme</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;

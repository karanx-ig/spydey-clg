import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1 className="glow-title">Welcome to Spydey College </h1>
      <p className="tagline">Empowering Innovation with Neon Energy</p>
      <div className="home-buttons">
        <Link to="/events" className="neon-btn">Explore Events</Link>
        <Link to="/gallery" className="neon-btn">View Gallery</Link>
        <Link to="/notices" className="neon-btn">Check Notices</Link>
      </div>
    </div>
  );
}

export default Home;

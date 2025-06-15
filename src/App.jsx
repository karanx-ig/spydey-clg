import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Events from './pages/Events';
import Notices from './pages/Notices';
import Gallery from './pages/Gallery';
import { ThemeProvider } from './ThemeContext';
import './App.css';
import './pages/theme.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) setLoggedIn(true);
}, []);


  return (
    <ThemeProvider>
      <Router>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/admin" element={loggedIn ? <Admin /> : <Login setLoggedIn={setLoggedIn} />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notices" element={<Notices />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

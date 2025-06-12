import { useState, useEffect } from 'react';
import './Admin.css';


function Admin() {
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [newNotice, setNewNotice] = useState('');

  useEffect(() => {
    try {
      const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
      const storedNotices = JSON.parse(localStorage.getItem('notices')) || [];
      setEvents(Array.isArray(storedEvents) ? storedEvents : []);
      setNotices(Array.isArray(storedNotices) ? storedNotices : []);
    } catch (err) {
      console.error('Error reading localStorage:', err);
      setEvents([]);
      setNotices([]);
    }
  }, []);

  const addEvent = () => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setNewEvent('');
  };

  const deleteEvent = (indexToRemove) => {
    const updatedEvents = events.filter((_, index) => index !== indexToRemove);
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  const addNotice = () => {
    const updatedNotices = [...notices, newNotice];
    setNotices(updatedNotices);
    localStorage.setItem('notices', JSON.stringify(updatedNotices));
    setNewNotice('');
  };

  const deleteNotice = (indexToRemove) => {
    const updatedNotices = notices.filter((_, index) => index !== indexToRemove);
    setNotices(updatedNotices);
    localStorage.setItem('notices', JSON.stringify(updatedNotices));
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <div className="admin-section">
        <h3>Events</h3>
        <input
          type="text"
          placeholder="Enter new event"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <button className="neon-btn" onClick={addEvent}>Add Event</button>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {String(event || 'Unnamed Event')}
              <button onClick={() => deleteEvent(index)} style={{ marginLeft: '10px' }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="admin-section">
        <h3>Notices</h3>
        <input
          type="text"
          placeholder="Enter new notice"
          value={newNotice}
          onChange={(e) => setNewNotice(e.target.value)}
        />
        <button className="neon-btn" onClick={addNotice}>Add Notice</button>
        <ul>
          {notices.map((notice, index) => (
            <li key={index}>
              {String(notice || 'Unnamed Notice')}
              <button onClick={() => deleteNotice(index)} style={{ marginLeft: '10px' }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;

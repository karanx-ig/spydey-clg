import { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

function Admin() {
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [newNotice, setNewNotice] = useState('');

  const fetchData = async () => {
    try {
      const [eventsRes, noticesRes] = await Promise.all([
        axios.get('http://localhost:5000/api/events'),
        axios.get('http://localhost:5000/api/notices')
      ]);
      setEvents(eventsRes.data || []);
      setNotices(noticesRes.data || []);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addEvent = async () => {
    try {
      await axios.post('http://localhost:5000/api/events', { name: newEvent });
      setNewEvent('');
      fetchData();
    } catch (err) {
      console.error('Failed to add event:', err);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      fetchData();
    } catch (err) {
      console.error('Failed to delete event:', err);
    }
  };

  const addNotice = async () => {
    try {
      await axios.post('http://localhost:5000/api/notices', { text: newNotice });
      setNewNotice('');
      fetchData();
    } catch (err) {
      console.error('Failed to add notice:', err);
    }
  };

  const deleteNotice = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notices/${id}`);
      fetchData();
    } catch (err) {
      console.error('Failed to delete notice:', err);
    }
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
          {events.map((event) => (
            <li key={event._id}>
              {event.name}
              <button onClick={() => deleteEvent(event._id)} style={{ marginLeft: '10px' }}>Delete</button>
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
          {notices.map((notice) => (
            <li key={notice._id}>
              {notice.text}
              <button onClick={() => deleteNotice(notice._id)} style={{ marginLeft: '10px' }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;

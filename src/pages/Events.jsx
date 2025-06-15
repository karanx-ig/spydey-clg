import { useEffect, useState } from 'react';
import './Events.css';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://your-backend-server.com/api/events')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setEvents(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch events:', err);
        setEvents([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length === 0 ? (
        <p className="no-events">No events available.</p>
      ) : (
        <ul className="event-list">
          {events.map((event, index) => (
            <li key={event._id || index}>{String(event.name || event)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Events;

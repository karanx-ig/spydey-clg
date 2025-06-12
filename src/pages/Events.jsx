import { useEffect, useState } from 'react';
import './Events.css';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    try {
      const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
      setEvents(Array.isArray(storedEvents) ? storedEvents : []);
    } catch (err) {
      console.error('Failed to parse events:', err);
      setEvents([]);
    }
  }, []);

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p className="no-events">No events available.</p>
      ) : (
        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index}>{String(event)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Events;

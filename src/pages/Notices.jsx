import { useEffect, useState } from 'react';
import './Notices.css';

function Notices() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace the URL with your actual backend endpoint
    fetch('https://your-backend-server.com/api/notices')
      .then((res) => res.json())
      .then((data) => {
        setNotices(data.notices || []);
        setLoading(false);
      })
      .catch(() => {
        setNotices([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="notices-container">
      <h2>Latest Notices</h2>
      {loading ? (
        <p>Loading...</p>
      ) : notices.length === 0 ? (
        <p className="no-notices">No notices posted.</p>
      ) : (
        <ul className="notice-list">
          {notices.map((notice, index) => (
            <li key={index}>{notice}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notices;

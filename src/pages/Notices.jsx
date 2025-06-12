import { useEffect, useState } from 'react';
import './Notices.css';


function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem('notices')) || [];
    setNotices(storedNotices);
  }, []);

  return (
    <div className="notices-container">
      <h2>Latest Notices</h2>
      {notices.length === 0 ? (
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

import './Gallery.css';

function Gallery() {
  return (
    <div className="gallery-container">
      <h2>Event Gallery</h2>
      <p>Photos from past events at RVS College</p>
      <div className="gallery-grid">
        {/* Example images — replace with real ones */}
        <img src="/images/event1.jpg" alt="Event 1" />
        <img src="/images/event2.jpg" alt="Event 2" />
        <img src="/images/event3.jpg" alt="Event 3" />
        <img src="/images/event4.jpg" alt="Event 4" />
        <img src="/images/event5.jpg" alt="Event 5" />
        <img src="/images/event6.jpg" alt="Event 6" />
      </div>
    </div>
  );
}

export default Gallery;

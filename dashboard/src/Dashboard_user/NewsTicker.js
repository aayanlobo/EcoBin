import React from "react";
import "../Style/ticker.css"; // CSS file for styling

const NewsTicker = () => {
  return (
    <div className="news-ticker">
      <ul>
        <li
          style={{
            fontSize: "30px",
            backgroundColor: "yellow",
            display: "inline-block",
          }}
        >
          New Announcement! Stay Tuned To Grab Best Offer
        </li>

        {/* Add more headlines */}
      </ul>
    </div>
  );
};

export default NewsTicker;

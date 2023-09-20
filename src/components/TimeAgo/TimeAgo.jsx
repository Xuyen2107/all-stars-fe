import React, { useState, useEffect } from "react";

function TimeAgo({ startTime }) {
  const [timeAgo, setTimeAgo] = useState("");

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} giây trước`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} min ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day ago`;
    }
  };

  useEffect(() => {
    const timestamp = new Date(startTime);
    setTimeAgo(formatTimeAgo(timestamp));
  }, []);

  return <div className="text-sm font-medium">{timeAgo}</div>;
}

export default TimeAgo;

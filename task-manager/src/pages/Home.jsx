import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Task Manager App</h1>
      <p>Manage your tasks efficiently using React!</p>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/tasks">📋 Task Manager</Link></li>
          <li><Link to="/image-gallery">🖼️ Image Gallery</Link></li>
          <li><Link to="/counter">🔢 Counter</Link></li>
          <li><Link to="/data-fetching">🌍 Fetch API Data</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

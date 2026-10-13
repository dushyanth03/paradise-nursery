
import React from "react";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <h2>Bring Nature Into Your Home</h2>
        <p>
          Discover beautiful houseplants and make your space greener.
        </p>

        <AboutUs />

        <button
          onClick={() => {
            window.location.href = "#plants";
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;

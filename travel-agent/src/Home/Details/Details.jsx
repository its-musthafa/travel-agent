import React, { useState, useEffect } from "react";
import "./Details.css";

function Details() {
  const [place, setPlace] = useState("");
  const [placeInfo, setPlaceInfo] = useState(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleSearchPlace = async () => {
    // Start fade-out if there is existing place info
    if (placeInfo) {
        setIsFadingOut(true);
    
        // Delay clearing the place info until fade-out animation completes
        setTimeout(() => {
          setPlaceInfo(null);
          setIsFadingOut(false);
          fetchPlaceInfo(); // Call the function to fetch new data
        }, 400); // Match this duration with the CSS transition duration
      } else {
        fetchPlaceInfo(); // Fetch directly if there's no existing info
      }
  };

  const fetchPlaceInfo = async () => {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${place}`
      );
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
  
      const data = await response.json();
      setPlaceInfo(data.extract); // 'extract' contains the summary text from Wikipedia
    } catch (error) {
      console.error("Error fetching Wikipedia data:", error);
      setPlaceInfo(null); // Clear previous place info if fetching fails
    }
  };

//   useEffect(() => {
//     if (placeInfo !== null) {
//       console.log(placeInfo); // Log placeInfo every time it updates
//       setIsResultAvailable(true);
//     }
//   }, [placeInfo]);

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  return (
    <section className="details">
      <div className="entrance">
        <h1 className="heading">Search Us</h1>
        <div className="search-bar">
          <input
            type="text"
            className="input-field"
            placeholder="Type something..."
            value={place}
            onChange={handlePlaceChange}
          />
          <button className="search-button" onClick={handleSearchPlace}>
            Woah me!
          </button>
        </div>

        {placeInfo && (
  <div className={`result-container ${isFadingOut ? "gone" : "show"}`}>
    <p>{placeInfo}</p>
  </div>
)}
      </div>
    </section>
  );
}

export default Details;

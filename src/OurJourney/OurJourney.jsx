import React from "react";
import "./OurJourney.css";
import SectionHeading from "../components/SectionHeading";
export default function OurJourney() {
  return (
    <section id="our-journey">
      <SectionHeading greek={"Το ταξίδι μας"} english={"Our journey"} />
      <div className="image-grid">
        <div className="img-container">
          <img src="event1.png" alt="event" />
        </div>
        <div className="img-container">
          <img src="event2.png" alt="event" />
        </div>
        <div className="img-container">
          <img src="event3.png" alt="event" />
        </div>
        <div className="img-container">
          <img src="event4.png" alt="event" />
        </div>
        <div className="img-container">
          <img src="event5.png" alt="event" />
        </div>
        <div className="img-container">
          <img src="event6.png" alt="event" />
        </div>
      </div>
    </section>
  );
}

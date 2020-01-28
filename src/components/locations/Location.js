import React from "react";

export default ({ location }) => (
  <section className="location">
    <h3 className="location__name">{location.name}</h3>
    <address>
      <div className="location__address">Address: {location.address}</div>
    </address>
    <div className="location__size">Sq Footage: {location.sqFoot}</div>
    <div className="location__handicap">Handicap Accessible: {location.handicap ? "Yes": "No"}</div>

  </section>
);
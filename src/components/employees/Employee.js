import React from "react";

export default ({ employee, location }) => (
  <section className="employee">
    <h3 className="employee__name">{employee.name}</h3>
    <address>
      <div className="employee__location">Location: {location.name}</div>
    </address>
    <div className="employee__manager">
      Manager: {employee.manager ? "Yes" : "No"}
    </div>
    <div className="employee__fullTime">
      Status: {employee.fullTime ? "Full-time" : "Part-time"}
    </div>
    <div className="employee__rate">
      Rate: {employee.rate}
    </div>
  </section>
);

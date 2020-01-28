import React, { useContext, useRef } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../locations/LocationProvider";
import "./Employee.css";

export default props => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);
  const employeeName = useRef("");
  const employeeLocation = useRef(0);
  const employeeManager = useRef(0);
  const employeeStatus = useRef(0);
  const employeeRate = useRef("");

  const constructNewEmployee = () => {
    const locationId = parseInt(employeeLocation.current.value);
    let manager = employeeManager.current.value;
    let status = employeeStatus.current.value;
    const rate = parseInt(employeeRate.current.value)

    if (manager === "yes") {
      manager = true;
    }
    if (status === "Full-time") {
      status = true;
    }

    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      addEmployee({
        name: employeeName.current.value,
        locationId: locationId,
        manager: manager,
        fullTime: status,
        rate: rate
      });
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <div className="form-group">
        <label htmlFor="employeeName">Employee name: </label>
        <input
          type="text"
          id="employeeName"
          ref={employeeName}
          required
          autoFocus
          className="form-control"
          placeholder="Employee name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Assign to location: </label>
        <select
          defaultValue=""
          name="location"
          ref={employeeLocation}
          id="employeeLocation"
          className="form-control"
        >
          <option value="0">Select a location</option>
          {locations.map(e => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="employeeManager">Manager: </label>
        <select
          defaultValue=""
          name="location"
          ref={employeeManager}
          id="employeeManager"
          className="form-control"
        >
          <option value="0"></option>

          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="employeeStatus">Status: </label>
        <select
          defaultValue=""
          name="location"
          ref={employeeStatus}
          id="employeeStatus"
          className="form-control"
        >
          <option value="0"></option>

          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
      </div>
      <div>
        <label htmlFor="employeeRate">Rate: </label>
        <input
          type="text"
          id="employeeRate"
          ref={employeeRate}
          required
          autoFocus
          className="form-control"
          placeholder="Employee rate"
        />
      </div>
      <button
        type="submit"
        onClick={event => {
          event.preventDefault(); // Prevent browser from submitting the form
          constructNewEmployee();
          props.history.push("/employees");
        }}
        className="btn btn-primary"
      >
        Save Employee
      </button>{" "}
    </form>
  );
};

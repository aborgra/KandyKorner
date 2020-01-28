import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./locations/LocationProvider";
import LocationList from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import { ProductTypesProvider } from "./productTypes/ProductTypesProvider";
import ProductList from "./products/ProductList";
import EmployeeList from "./employees/EmployeeList";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import EmployeeForm from "./employees/EmployeeForm";
import Login from "./auth/Login";

export default props => {
  return (
    <>
      {/* <h2>Locations</h2> */}
      <LocationProvider>
      <Route
            exact
            path="/"
            render={props => {
              if (localStorage.getItem("kandy_customer") !== null) {
                return <LocationList {...props} />;
              }
              return <Login {...props} />;
            }}
          />
      </LocationProvider>

      {/* <h2>Products</h2> */}
      <ProductProvider>
        <ProductTypesProvider>
        <Route
            exact
            path="/products"
            render={props => {
              if (localStorage.getItem("kandy_customer") !== null) {
                return <ProductList {...props} />;
              }
              return <Login {...props} />;
            }}
          />
        </ProductTypesProvider>
      </ProductProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route
            exact
            path="/employees"
            render={props => <EmployeeList {...props} />}
          />

          <Route
            exact
            path="/employees/create"
            render={props => <EmployeeForm {...props} />}
          />
        </LocationProvider>
      </EmployeeProvider>
    </>
  );
};

import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar.jsx";
import { Welcome } from "../components/welcome/Welcome";
import { EmployeeDetails } from "../employees/EmployeeDetails";
import { EmployeeList } from "../employees/EmployeeList";
import { TicketList } from "../components/tickets/TicketList";
import { CustomerList } from "../components/customers/CustomerList";
import { CustomerDetails } from "../components/customers/CustomerDetails";
import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObj = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObj);
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>

        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />{" "}
          {/* the ':customerId' is a route parameter or param */}
        </Route>
      </Route>
    </Routes>
  );
};

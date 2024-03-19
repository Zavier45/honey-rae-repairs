import "./App.css";
import { CustomerList } from "./components/customers/CustomerList.jsx";
import { NavBar } from "./components/nav/NavBar.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";
import { EmployeeList } from "./employees/EmployeeList.jsx";
import { Routes, Route, Outlet } from "react-router-dom";
import { Welcome } from "./components/welcome/Welcome.jsx";
import { CustomerDetails } from "./components/customers/CustomerDetails.jsx";

export const App = () => {
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
        <Route path="employees" element={<EmployeeList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
          {/* the ':customerId' is a route parameter */}
        </Route>
      </Route>
    </Routes>
  );
};

import "./App.css";
import { CustomerList } from "./components/customers/CustomerList.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";
import { EmployeeList } from "./employees/EmployeeList.jsx";

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      {/* <CustomerList /> */}
      <EmployeeList />
    </>
  );
};

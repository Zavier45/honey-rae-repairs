import React from "react";
import { getAllEmployees } from "../../services/employeeService.jsx";
export const Ticket = ({ ticket }) => {
  const [employees, setEmployee] = React.useState([]);
  const [assignedEmployee, setAssignedEmployee] = React.useState({});

  React.useEffect(() => {
    getAllEmployees().then((employeeArray) => {
      setEmployee(employeeArray);
    });
  }, []);

  React.useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);
  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">Assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
          </div>
        </div>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
      </footer>
    </section>
  );
};

import React from "react";
import { getNonClientUser } from "../services/userService.jsx";
import { Employees } from "./Employees.jsx";

export const EmployeeList = () => {
  const [employees, setAllEmployees] = React.useState([]);

  React.useEffect(() => {
    getNonClientUser().then((employeeArray) => {
      setAllEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj, index) => {
        return <Employees employeeObj={employeeObj} index={index} />;
      })}
    </div>
  );
};

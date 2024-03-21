import React from "react";
import { useParams } from "react-router-dom";
import "./Employees.css";
import { getAllEmployees } from "../services/employeeService";

export const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = React.useState({});

  React.useEffect(() => {
    getAllEmployees(employeeId).then((info) => {
      const employeeObj = info[0];
      setEmployee(employeeObj);
    });
  }, [employeeId]);
  return (
    <section className="employee" key={employeeId}>
      <header className="employee-header">{employee?.user.fullName}</header>
      <div className="employee-info">
        <span>Email :</span>
        {employee?.user.email}
      </div>
      <div className="employee-info">
        <span> Specialty :</span>
        {employee.specialty}
      </div>
      <div className="employee-info">
        <span>Rate :</span>$ {employee.rate}
      </div>
    </section>
  );
};

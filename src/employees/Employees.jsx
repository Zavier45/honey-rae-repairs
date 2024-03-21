import "./Employees.css";

export const Employees = ({ employeeObj, index }) => {
  return (
    <div className="employee" key={index}>
      <div>
        <div className="employee-info">Name</div>
        <div key={employeeObj.id}>{employeeObj?.fullName}</div>
      </div>
      <div>
        <div className="employee-info">Email</div>
        <div key={employeeObj.id}>{employeeObj?.email}</div>
      </div>
    </div>
  );
};
